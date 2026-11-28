import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 5, projectName: "6502", image: "IMG_1164.jpg", category: "Electronics" },
    strings.en.card,
    strings.nl.card
);

export const Computer6502: FC = () => {
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
                <img alt={s.firstBreadboardAlt} src="/images/6502/IMG_0047.jpg" />
                <img alt={s.computerAlt} src="/images/6502/IMG_1164.jpg" />
            </div>
        </div>
    )
}
