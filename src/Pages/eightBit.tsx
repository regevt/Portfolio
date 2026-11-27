import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 6,
    titleEN: "8-bit computer",
    titleNL: "",
    projectName: "8bit",
    descriptionEN: "A breadboard computer built from logic chips, one module at a time.",
    descriptionNL: "",
    image: "1.JPG",
    category: "Electronics",
    specs: [
        { label: "Logic", value: "74-series chips" },
        { label: "Output", value: "7-segment display" },
    ]
}

export const EightBit: FC = () => {
    return (
        <div className="page">
            <h1 className="title">8-bit breadboard computer</h1>
            <Specs items={Data.specs} />
            <div>
                <p>
                    <span>[Placeholder: what got you started on an 8-bit computer, and which modules it has.]</span>
                </p>
                <p>
                    <span>[Placeholder: the hardest module to get working, and what you learned from it.]</span>
                </p>
            </div>
            <div className="imageGrid">
                <img alt="The 8-bit computer on breadboards" src="/images/8bit/1.JPG" />
                <img alt="Module of the 8-bit computer" src="/images/8bit/2.jpg" />
                <img alt="Module of the 8-bit computer" src="/images/8bit/3.jpeg" />
                <img alt="Module of the 8-bit computer" src="/images/8bit/4.jpg" />
                <img alt="Module of the 8-bit computer" src="/images/8bit/5.jpg" />
            </div>
        </div>
    )
}
