import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 6, projectName: "8bit", image: "1.JPG", category: "Electronics" },
    strings.en.card,
    strings.nl.card
);

export const EightBit: FC = () => {
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
                <img alt={s.computerAlt} src="/images/8bit/1.JPG" />
                <img alt={s.moduleAlt} src="/images/8bit/2.jpg" />
                <img alt={s.moduleAlt} src="/images/8bit/3.jpeg" />
                <img alt={s.moduleAlt} src="/images/8bit/4.jpg" />
                <img alt={s.moduleAlt} src="/images/8bit/5.jpg" />
            </div>
        </div>
    )
}
