import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
    { id: 4, projectName: "platform", image: "platform.jpg", category: "Woodworking" },
    strings.en.card,
    strings.nl.card
);

export const Platform: FC = () => {
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
                <img alt={s.alt} src="/images/platform/platform.jpg" />
                {/* <img alt="Star and Ivy" src="/images/platform/dogs.jpeg" /> */}
            </div>
        </div>
    )
}
