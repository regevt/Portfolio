import {
    FC, PropsWithChildren, MouseEvent as ReactMouseEvent, TransitionEvent, useCallback,
    useEffect, useLayoutEffect, useMemo, useRef, useState
} from "react";
import { useParams } from "react-router-dom";
import "./Project.css";
import { Pages } from "../../Pages";
import { Footer } from "../../Components/Footer/Footer";

const ANIMATION_MS = 400;
const VIEWPORT_FILL = 0.9;

interface OpenedImage {
    src: string;
    width: number;
    height: number;
}

export interface ProjectProps extends PropsWithChildren {

}

export const Project: FC<ProjectProps> = ({ children }) => {
    const params = useParams();

    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState<OpenedImage | undefined>(undefined);

    const sourceRef = useRef<HTMLImageElement | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const Page = useMemo(() => {
        return Pages.find(p => p.data.id === Number(params.id))?.Page;
    }, [params]);

    const getCollapsedTransform = useCallback(() => {
        const source = sourceRef.current;
        const overlay = overlayRef.current;
        const img = imgRef.current;
        if (!source || !overlay || !img) return "scale(0.25)";

        const s = source.getBoundingClientRect();
        const o = overlay.getBoundingClientRect();

        const dx = (s.left + s.width / 2) - (o.left + o.width / 2);
        const dy = (s.top + s.height / 2) - (o.top + o.height / 2);
        const scale = s.width / img.offsetWidth;

        return `translate(${dx}px, ${dy}px) scale(${scale})`;
    }, []);

    const handleContentClick = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        const target = e.target;
        if (!(target instanceof HTMLImageElement)) return;
        if (sourceRef.current) return;
        const rect = target.getBoundingClientRect();
        const naturalW = target.naturalWidth || rect.width;
        const naturalH = target.naturalHeight || rect.height;

        const fit = Math.min(
            (window.innerWidth * VIEWPORT_FILL) / naturalW,
            (window.innerHeight * VIEWPORT_FILL) / naturalH
        );

        sourceRef.current = target;

        setImage({
            src: target.currentSrc || target.src,
            width: naturalW * fit,
            height: naturalH * fit,
        });
        setIsOpen(true);
    }, []);

    useLayoutEffect(() => {
        const img = imgRef.current;
        if (!isOpen || !img) return;

        let cancelled = false;

        img.style.transition = "none";
        img.style.transform = getCollapsedTransform();
        img.style.visibility = "hidden";

        const start = () => {
            if (cancelled) return;
            if (sourceRef.current) sourceRef.current.style.visibility = "hidden";
            img.style.visibility = "visible";
            img.getBoundingClientRect();
            img.style.transition = "";
            img.style.transform = "none";
        };

        img.decode().then(start, start);

        return () => { cancelled = true; };
    }, [isOpen, image, getCollapsedTransform]);

    const finishClose = useCallback(() => {
        if (imgRef.current) imgRef.current.style.visibility = "hidden";
        if (sourceRef.current) {
            sourceRef.current.style.visibility = "";
            sourceRef.current = null;
        }
        setImage(undefined);
    }, []);

    const close = useCallback(() => {
        const img = imgRef.current;
        if (!img) return;
        img.style.transform = getCollapsedTransform();
        setIsOpen(false);
    }, [getCollapsedTransform]);

    const handleTransitionEnd = useCallback((e: TransitionEvent<HTMLImageElement>) => {
        if (!isOpen && e.propertyName === "transform") finishClose();
    }, [isOpen, finishClose]);

    useEffect(() => {
        if (isOpen || !image) return;
        const timer = setTimeout(finishClose, ANIMATION_MS + 150);
        return () => clearTimeout(timer);
    }, [isOpen, image, finishClose]);

    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, close]);

    useEffect(() => () => {
        if (sourceRef.current) sourceRef.current.style.visibility = "";
    }, []);

    return (
        <div className="project">
            <div className="description" onClick={handleContentClick}>
                {Page && <Page />}
            </div>

            <Footer />

            <div
                ref={overlayRef}
                className={`overlay ${image ? "active" : ""} ${isOpen ? "visible" : ""}`}
                onClick={close}
            >
                {image && (
                    <img
                        ref={imgRef}
                        src={image.src}
                        alt="Expanded view"
                        style={{ width: image.width, height: image.height }}
                        onTransitionEnd={handleTransitionEnd}
                    />
                )}
            </div>
        </div>
    );
};