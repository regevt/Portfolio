import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 7, projectName: "cnc", image: "IMG_0939.JPG", category: "CNC" },
    strings.en.card,
    strings.nl.card
);

export const Cnc: FC = () => {
    const { pick } = useLocale();
    const s = pick(strings.en, strings.nl);

    return (
        <div className="page">
            <h1 className="title">{s.title}</h1>
            <Specs items={Data.specs} />
            <div>
                {s.paragraphs.map((text, i) => <p key={i}><RichText text={text} /></p>)}
            </div>
            <div className="imageGrid">
                <img alt={s.partsAlt} src="/images/cnc/23467A62-1EE1-4CF5-8FA4-B4A8C4F6D2F9.JPG" />
                <img alt={s.machineAlt} src="/images/cnc/5FCCF269-7B03-47B0-8C24-E937CDA9A274.JPG" />
                <img alt={s.engravingAlt} src="/images/cnc/IMG_0939.JPG" />
            </div>
            <video controls muted playsInline preload="metadata" src="/images/cnc/IMG_0938.MOV" />
            <video controls muted playsInline preload="metadata" src="/images/cnc/IMG_0971.MOV" />
        </div>
    )
}
