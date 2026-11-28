import { FC } from "react"
import "../page.css"
import { useIsMobile } from "../../hooks/useIsMobile"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 3, projectName: "stargate", image: "gate_in_display.jpg", category: "3D printing" },
    strings.en.card,
    strings.nl.card
);

export const Stargate: FC = () => {
    const isMobile = useIsMobile();
    const { pick } = useLocale();
    const s = pick(strings.en, strings.nl);

    return (
        <div className="page">
            <h1 className="title">{s.title}</h1>
            <Specs items={Data.specs} />
            <p><RichText text={s.intro} /></p>
            <img alt={s.finishedAlt} src="/images/stargate/finished_gate.jpg" />
            <p><RichText text={s.printing} /></p>
            <iframe
                width={isMobile ? "380" : "560"}
                height={isMobile ? "" : "315"}
                src="https://www.youtube.com/embed/NiEXRBDkU_o?si=VZ7er3nZQYlcgGWh"
                title={s.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <p><RichText text={s.dhd} /></p>
            <img alt={s.dhdAlt} src="/images/stargate/dhd.jpg" />
            <p><RichText text={s.painting} /></p>
            <img alt={s.displayAlt} src="/images/stargate/gate_in_display.jpg" />
        </div>
    )
}
