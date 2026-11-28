import {
    FC, PropsWithChildren, MouseEvent as ReactMouseEvent, TransitionEvent, useCallback,
    useEffect, useLayoutEffect, useMemo, useRef, useState
} from "react";
import { Link, useParams } from "react-router-dom";
import "./Project.css";
import { Pages } from "../../Pages";
import { Footer } from "../../Components/Footer/Footer";
import { Project as ProjectData } from "../../types/types";
import { collapsedGeometry } from "../../Utils/lightbox.utils";
import { useLocale } from "../../hooks/useLocale";

const ANIMATION_MS = 400;
const VIEWPORT_FILL = 0.9;
const EXPANDED_CLIP = "inset(0px 0px 0px 0px round 0px)";

interface OpenedImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    position: number;
    total: number;
}

const openedImageFor = (target: HTMLImageElement, gallery: HTMLImageElement[]): OpenedImage => {
    const rect = target.getBoundingClientRect();
    const naturalW = target.naturalWidth || rect.width;
    const naturalH = target.naturalHeight || rect.height;

    const fit = Math.min(
        (window.innerWidth * VIEWPORT_FILL) / naturalW,
        (window.innerHeight * VIEWPORT_FILL) / naturalH
    );

    return {
        src: target.currentSrc || target.src,
        alt: target.alt,
        width: naturalW * fit,
        height: naturalH * fit,
        position: gallery.indexOf(target) + 1,
        total: gallery.length,
    };
};

const ChevronIcon: FC<{ direction: "left" | "right" }> = ({ direction }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
);

export interface ProjectProps extends PropsWithChildren {

}

export const Project: FC<ProjectProps> = ({ children }) => {
    const params = useParams();
    const { t, pick, category } = useLocale();
    const titleOf = (project: ProjectData) => pick(project.titleEN, project.titleNL || project.titleEN);

    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState<OpenedImage | undefined>(undefined);

    const sourceRef = useRef<HTMLImageElement | null>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const navigatingRef = useRef(false);

    const getGallery = useCallback(() => {
        return Array.from(contentRef.current?.querySelectorAll("img") ?? []);
    }, []);

    const index = useMemo(() => {
        return Pages.findIndex(p => p.data.id === Number(params.id));
    }, [params]);

    const Page = Pages[index]?.Page;
    const data = Pages[index]?.data;
    const previous = index > 0 ? Pages[index - 1].data : undefined;
    const next = index >= 0 && index < Pages.length - 1 ? Pages[index + 1].data : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.id]);

    const thumbnail = (project: ProjectData) =>
        `${process.env.PUBLIC_URL || ''}/images/${project.projectName}/${project.image}`;

    const getCollapsedStyle = useCallback(() => {
        const source = sourceRef.current;
        const overlay = overlayRef.current;
        const img = imgRef.current;
        if (!source || !overlay || !img) return { transform: "scale(0.25)", clipPath: EXPANDED_CLIP };

        const s = source.getBoundingClientRect();
        const o = overlay.getBoundingClientRect();
        const sourceStyle = getComputedStyle(source);

        const dx = (s.left + s.width / 2) - (o.left + o.width / 2);
        const dy = (s.top + s.height / 2) - (o.top + o.height / 2);
        const { scale, clip } = collapsedGeometry(
            { width: s.width, height: s.height },
            { width: img.offsetWidth, height: img.offsetHeight },
            sourceStyle.objectFit
        );
        const radius = (parseFloat(sourceStyle.borderTopLeftRadius) || 0) / scale;

        return {
            transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
            clipPath: `inset(${clip.top}px ${clip.right}px ${clip.bottom}px ${clip.left}px round ${radius}px)`,
        };
    }, []);

    const handleContentClick = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        const target = e.target;
        if (!(target instanceof HTMLImageElement)) return;
        if (sourceRef.current) return;

        sourceRef.current = target;

        setImage(openedImageFor(target, getGallery()));
        setIsOpen(true);
    }, [getGallery]);

    const navigate = useCallback((step: number) => {
        const current = sourceRef.current;
        const gallery = getGallery();
        if (!current || gallery.length < 2) return;

        const position = gallery.indexOf(current);
        const target = gallery[(position + step + gallery.length) % gallery.length];

        current.style.visibility = "";
        sourceRef.current = target;
        navigatingRef.current = true;
        setImage(openedImageFor(target, gallery));
    }, [getGallery]);

    useLayoutEffect(() => {
        const img = imgRef.current;
        if (!isOpen || !img) return;

        let cancelled = false;

        if (navigatingRef.current) {
            // Moving to another photo: show it in place, with no flight from its thumbnail.
            navigatingRef.current = false;
            img.style.transition = "none";
            img.style.transform = "none";
            img.style.clipPath = EXPANDED_CLIP;
            img.style.visibility = "hidden";
            if (sourceRef.current) sourceRef.current.style.visibility = "hidden";

            const show = () => {
                if (cancelled) return;
                img.style.visibility = "visible";
                img.getBoundingClientRect();
                img.style.transition = "";
            };

            img.decode().then(show, show);

            return () => { cancelled = true; };
        }

        const collapsed = getCollapsedStyle();
        img.style.transition = "none";
        img.style.transform = collapsed.transform;
        img.style.clipPath = collapsed.clipPath;
        img.style.visibility = "hidden";

        const start = () => {
            if (cancelled) return;
            if (sourceRef.current) sourceRef.current.style.visibility = "hidden";
            img.style.visibility = "visible";
            img.getBoundingClientRect();
            img.style.transition = "";
            img.style.transform = "none";
            img.style.clipPath = EXPANDED_CLIP;
        };

        img.decode().then(start, start);

        return () => { cancelled = true; };
    }, [isOpen, image, getCollapsedStyle]);

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
        const collapsed = getCollapsedStyle();
        img.style.transform = collapsed.transform;
        img.style.clipPath = collapsed.clipPath;
        setIsOpen(false);
    }, [getCollapsedStyle]);

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
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                navigate(-1);
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                navigate(1);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, close, navigate]);

    useEffect(() => () => {
        if (sourceRef.current) sourceRef.current.style.visibility = "";
    }, []);

    return (
        <main className="project">
            <div className="wrap project-head">
                <Link className="back" to="/" state={{ section: "projects" }}>{t("project.back")}</Link>
                {data?.category && <span className="eyebrow">{category(data.category)}</span>}
            </div>

            <div className="description" ref={contentRef} onClick={handleContentClick}>
                {Page && <Page />}
            </div>

            {(previous || next) && <nav className="wrap more-projects" aria-label={t("project.more")}>
                {previous ? <Link className="neighbour" to={`/project/${previous.id}`}>
                    <img src={thumbnail(previous)} alt="" />
                    <span>
                        <span className="direction">{t("project.previous")}</span>
                        <span className="name">{titleOf(previous)}</span>
                    </span>
                </Link> : <span />}
                {next && <Link className="neighbour next" to={`/project/${next.id}`}>
                    <span>
                        <span className="direction">{t("project.next")}</span>
                        <span className="name">{titleOf(next)}</span>
                    </span>
                    <img src={thumbnail(next)} alt="" />
                </Link>}
            </nav>}

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
                        alt={image.alt || t("lightbox.expanded")}
                        style={{ width: image.width, height: image.height }}
                        onTransitionEnd={handleTransitionEnd}
                    />
                )}
                {isOpen && image && image.total > 1 && <>
                    <button type="button" className="overlay-nav previous" aria-label={t("lightbox.previous")}
                        onClick={(e) => { e.stopPropagation(); navigate(-1); }}>
                        <ChevronIcon direction="left" />
                    </button>
                    <button type="button" className="overlay-nav next" aria-label={t("lightbox.next")}
                        onClick={(e) => { e.stopPropagation(); navigate(1); }}>
                        <ChevronIcon direction="right" />
                    </button>
                    <span className="overlay-count" aria-live="polite">{image.position} / {image.total}</span>
                </>}
            </div>
        </main>
    );
};