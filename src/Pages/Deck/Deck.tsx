import { FC } from "react"
import "../page.css"
import { Specs } from "../../Components/Specs/Specs"
import { RichText } from "../../Components/RichText/RichText"
import { useLocale } from "../../hooks/useLocale"
import { projectData } from "../projectData"
import { strings } from "./strings"

export const Data = projectData(
   { id: 1, projectName: "deck", image: "0.png", category: "Woodworking" },
   strings.en.card,
   strings.nl.card
);

export const Deck: FC = () => {
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
            <img alt="" src="/images/deck/0.png" />
            <img alt="" src="/images/deck/2.jpg" />
            <img alt="" src="/images/deck/frame.jpg" />
            <img alt="" src="/images/deck/struts.jpg" />
         </div>
      </div>
   )
}
