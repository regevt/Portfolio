import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 9,
    titleEN: "Hex light panels",
    titleNL: "",
    projectName: "nanoleaf",
    descriptionEN: "Hexagon wall lights, designed in CAD and printed to snap together.",
    descriptionNL: "",
    image: "IMG_0034.jpg",
    category: "Electronics",
    specs: [
        { label: "Lights", value: "Addressable LEDs" },
        { label: "Tiles", value: "3D printed" },
    ]
}

export const HexLights: FC = () => {
    return (
        <div className="page">
            <h1 className="title">Hex light panels</h1>
            <Specs items={Data.specs} />
            <div>
                <p>
                    <span>[Placeholder: what inspired the panels, and how many tiles there are.]</span>
                </p>
                <p>
                    <span>[Placeholder: how the tiles connect, and how you control the LEDs.]</span>
                </p>
            </div>
            <img alt="The hex panels changing colour" src="/images/nanoleaf/ezgif-2887d507bf8f04be.gif" />
            <div className="imageGrid">
                <img alt="The hex panels lit up" src="/images/nanoleaf/IMG_0034.jpg" />
                <img alt="Hex panel" src="/images/nanoleaf/IMG_0048.jpg" />
                <img alt="Hex panel" src="/images/nanoleaf/IMG_0049.jpg" />
                <img alt="Hex panel" src="/images/nanoleaf/IMG_0050.jpg" />
            </div>
        </div>
    )
}
