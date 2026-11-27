import { FC } from "react"
import "./page.css"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 4,
    titleEN: "Dog bowl platform",
    titleNL: "",
    projectName: "platform",
    descriptionEN: "A raised feeder for Star and Ivy. Trigonometry, we meet again.",
    descriptionNL: "",
    image: "platform.jpg",
    category: "Woodworking",
    specs: [
        { label: "Wood", value: "Pallet wood" },
        { label: "Leg angle", value: "110°" },
        { label: "Finish", value: "Linseed oil" },
    ]
}

export const Platform: FC = () => {
    return (
        <div className="page">
            <h1 className="title">Trigonometry we meet again</h1>
            <Specs items={Data.specs} />
            <div >
                <p >
                    <span>I have two <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Italian_Greyhound">Italian greyhounds</a>, Star (gary) and Ivy (black), I wanted to make them a platform for food and water</span>
                </p>

                <p>
                    For this project I used recycled pallet wood that I got for a big and heavy order.
                    Iv'e cut the woods to length, planed them until they ware all flat and the same thickness.
                    Then I glued them into one big board that I later cut to the three planks that makes the platform.
                </p>
                <p>
                    The project requires that I glue the legs at an angle of 110 degrees, I haven't done trigonometry since high-school,
                    so I experimented on the offcuts to hone-in the correct angle I should set the miter-saw to.
                </p>
                <p>
                    for the finish I used linseed oil because it's water resistant and food safe.
                </p>
            </div>
            <div style={{ marginTop: "30px" }} >
                <img alt="dog bowel platform" src="/images/platform/platform.jpg" />
                {/* <img alt="Star and Ivy" src="/images/platform/dogs.jpeg" /> */}
            </div>
        </div>
    )
}