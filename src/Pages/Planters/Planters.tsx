import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 2, projectName: "planters", image: "planter1.jpg", category: "Woodworking" },
    strings.en.card,
    strings.nl.card
);

export const Planters: FC = () => {
    const { pick } = useLocale();
    const s = pick(strings.en, strings.nl);

    return (
        <div className="page">
            <h1 className="title">{s.title}</h1>
            <Specs items={Data.specs} />
            <div>
                {s.paragraphs.map((text, i) => <p key={i}><RichText text={text} /></p>)}
            </div>
            <div style={{ marginTop: "30px" }}>
                <img alt={s.firstAlt} src="/images/planters/planter1.jpg" />
            </div>

            <h2 className="title">{s.secondTitle}</h2>
            <p><RichText text={s.second} /></p>
            <div style={{ marginTop: "30px" }}>
                <img alt={s.secondAlt} src="/images/planters/planter2.jpg" />
            </div>
        </div>
    )
}
