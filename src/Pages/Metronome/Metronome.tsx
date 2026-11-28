import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 8, projectName: "metronome", image: "IMG_0044_still.jpeg", category: "Electronics" },
    strings.en.card,
    strings.nl.card
);

export const Metronome: FC = () => {
    const { pick } = useLocale();
    const s = pick(strings.en, strings.nl);

    return (
        <div className="page">
            <h1 className="title">{s.title}</h1>
            <Specs items={Data.specs} />
            <div>
                {s.paragraphs.map((text, i) => <p key={i}><RichText text={text} /></p>)}
            </div>
            <img alt={s.animationAlt} src="/images/metronome/ezgif-4ea9fd2f5c2305e8.gif" />
            <div className="imageGrid">
                <img alt={s.finishedAlt} src="/images/metronome/IMG_0044_still.jpeg" />
                <img alt={s.caseFrontAlt} src="/images/metronome/IMG_0051.jpg" />
                <img alt={s.caseBackAlt} src="/images/metronome/IMG_0052.jpg" />
            </div>
        </div>
    )
}
