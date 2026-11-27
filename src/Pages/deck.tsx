import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
   id: 1,
   titleEN: "Deck",
   titleNL: "",
   projectName: "deck",
   descriptionEN: "A new balcony deck to replace one that had rotted through.",
   descriptionNL: "",
   image: "0.png",
   category: "Woodworking",
   specs: [
      { label: "Size", value: "4.2 × 2.3 m" },
      { label: "Frame", value: "Azobe" },
      { label: "Slats", value: "Bankirai" },
   ]
}

export const Deck: FC = () => {
   return (
      <div className="page">
         <h1 className="title">Deck (balcony extension)</h1>
         <Specs items={Data.specs} />
         <div >
            <p >
               <span>After moving into the my new house it was obvious that the deck will need to be replaced, the old one was completely rotten and beyond save.</span>
            </p>
            <p >
               <span >The woods I chose for the project are </span>
               <strong ><a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Lophira_alata" >Azobe</a>
               </strong>
               <span > for the supporting structure and </span>
               <span >I went for those woods because, according to my research, they are good for the outside and are somewhat weather resistant. with good care they should last for many years. </span>
               <strong >
                  <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Shorea#:~:text=Shorea%20fossils%20(linked%20with%20the%20modern%20sal%2C,and%20selected%20species%20*%20Shorea%20robusta%20C.F.Gaertn." ><span >Bankirai</span></a>
               </strong>
               <span> for the slats. </span>
            </p>
            <p >
               <span>Not knowing what I am doing, I decided to err on the side of caution and doubled all the stratus. in retrospective, probably overkill.</span>
            </p>
         </div >
         <div className="imageGrid">
            <img alt="" src="/images/deck/0.png" />
            <img alt="" src="/images/deck/2.jpg" />
            <img alt="" src="/images/deck/frame.jpg" />
            <img alt="" src="/images/deck/struts.jpg" />
         </div>
      </div>
   )
}