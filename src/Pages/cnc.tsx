import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 7,
    titleEN: "CNC machine",
    titleNL: "",
    projectName: "cnc",
    descriptionEN: "A CNC machine from aluminium extrusion. First job: a Stargate in acrylic.",
    descriptionNL: "",
    image: "IMG_0939.JPG",
    category: "CNC",
    specs: [
        { label: "Frame", value: "Aluminium extrusion" },
        { label: "First job", value: "Engraved acrylic" },
    ]
}

export const Cnc: FC = () => {
    return (
        <div className="page">
            <h1 className="title">CNC machine</h1>
            <Specs items={Data.specs} />
            <div>
                <p>
                    <span>[Placeholder: which machine or kit this is, and why you wanted a CNC.]</span>
                </p>
                <p>
                    <span>[Placeholder: putting it together, the first cuts, and what you make with it now.]</span>
                </p>
            </div>
            <div className="imageGrid">
                <img alt="Parts of the CNC machine before assembly" src="/images/cnc/23467A62-1EE1-4CF5-8FA4-B4A8C4F6D2F9.JPG" />
                <img alt="The CNC machine" src="/images/cnc/5FCCF269-7B03-47B0-8C24-E937CDA9A274.JPG" />
                <img alt="A Stargate engraved in acrylic" src="/images/cnc/IMG_0939.JPG" />
            </div>
            <video controls muted playsInline preload="metadata" src="/images/cnc/IMG_0938.MOV" />
            <video controls muted playsInline preload="metadata" src="/images/cnc/IMG_0971.MOV" />
        </div>
    )
}
