import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 9, projectName: "nanoleaf", image: "IMG_0034.jpg", category: "Electronics" },
    strings.en.card,
    strings.nl.card
);

export const HexLights: FC = () => {
    const { pick } = useLocale();
    const s = pick(strings.en, strings.nl);

    return (
        <div className="page">
            <h1 className="title">{s.title}</h1>
            <Specs items={Data.specs} />
            <div>
                {s.paragraphs.map((text, i) => <p key={i}><RichText text={text} /></p>)}
            </div>
            <img alt={s.animationAlt} src="/images/nanoleaf/ezgif-2887d507bf8f04be.gif" />
            <div className="imageGrid">
                <img alt={s.litAlt} src="/images/nanoleaf/IMG_0034.jpg" />
                <img alt={s.panelAlt} src="/images/nanoleaf/IMG_0048.jpg" />
                <img alt={s.panelAlt} src="/images/nanoleaf/IMG_0049.jpg" />
                <img alt={s.panelAlt} src="/images/nanoleaf/IMG_0050.jpg" />
            </div>
        </div>
    )
}
