import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 5,
    titleEN: "6502 computer",
    titleNL: "",
    projectName: "6502",
    descriptionEN: "A 6502 computer on breadboards, with an LCD and a serial port.",
    descriptionNL: "",
    image: "IMG_1164.jpg",
    category: "Electronics",
    specs: [
        { label: "CPU", value: "6502" },
        { label: "Display", value: "16×2 LCD" },
        { label: "I/O", value: "DB9 serial" },
    ]
}

export const Computer6502: FC = () => {
    return (
        <div className="page">
            <h1 className="title">6502 computer</h1>
            <Specs items={Data.specs} />
            <div>
                <p>
                    <span>[Placeholder: why you built a 6502 computer, and what you followed or designed yourself.]</span>
                </p>
                <p>
                    <span>[Placeholder: how the build went, what broke, and what you would do differently.]</span>
                </p>
            </div>
            <div className="imageGrid">
                <img alt="The first 6502 breadboard" src="/images/6502/IMG_0047.jpg" />
                <img alt="The 6502 computer with LCD and serial port" src="/images/6502/IMG_1164.jpg" />
            </div>
        </div>
    )
}
