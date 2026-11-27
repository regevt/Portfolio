import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 8,
    titleEN: "Metronome",
    titleNL: "",
    projectName: "metronome",
    descriptionEN: "A desk metronome with a sweep of LEDs and a BPM display.",
    descriptionNL: "",
    image: "IMG_0044_still.jpeg",
    category: "Electronics",
    specs: [
        { label: "Display", value: "OLED" },
        { label: "Beat", value: "8 LEDs" },
        { label: "Case", value: "3D printed" },
    ]
}

export const Metronome: FC = () => {
    return (
        <div className="page">
            <h1 className="title">Metronome</h1>
            <Specs items={Data.specs} />
            <div>
                <p>
                    <span>[Placeholder: who the metronome is for, and how it works.]</span>
                </p>
                <p>
                    <span>[Placeholder: designing the case, and the electronics inside it.]</span>
                </p>
            </div>
            <img alt="The metronome running" src="/images/metronome/ezgif-4ea9fd2f5c2305e8.gif" />
            <div className="imageGrid">
                <img alt="The finished metronome" src="/images/metronome/IMG_0044_still.jpeg" />
                <img alt="Design of the metronome case, front" src="/images/metronome/IMG_0051.jpg" />
                <img alt="Design of the metronome case, back" src="/images/metronome/IMG_0052.jpg" />
            </div>
        </div>
    )
}
