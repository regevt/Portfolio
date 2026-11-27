import { FC } from "react"
import "./page.css"
import { useIsMobile } from "../hooks/useIsMobile"
import { Specs } from "../Components/Specs/Specs"
import { Project } from "../types/types"

export const Data: Project = {
    id: 3,
    titleEN: "Stargate",
    titleNL: "",
    projectName: "stargate",
    descriptionEN: "The Stargate Project's printable gate, with a dial home device that lights up.",
    descriptionNL: "",
    image: "gate_in_display.jpg",
    category: "3D printing",
    specs: [
        { label: "Build", value: "3D printed" },
        { label: "Electronics", value: "PCBWay PCB" },
        { label: "Finish", value: "Dry-brushed base" },
    ]
}

export const Stargate: FC = () => {
    const isMobile = useIsMobile();

    return (
        <div className="page">
            <h1 className="title">3D printed Stargate</h1>
            <Specs items={Data.specs} />
            <p >
                <span>
                    For as long as remember myself I was a fan of the movie <a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt0111282/">Stargate (1994)</a> and then the tv-show <a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt0118480">Stargate SG-1 (1997)</a>
                    so when Kristian from <a target="_blank" rel="noreferrer" href="https://thestargateproject.com/">The stargate project</a> released his 3D printable "working" Stargate <b>I just had to make it</b>.
                </span>
            </p>
            <img alt="dog bowel platform" src="/images/stargate/finished_gate.jpg" />
            <p>
                <span>Printing the gate took several days and in the end I had a pile of dozens of parts. connecting everything together was a breeze thanks to Kristian's <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ElTCFurf5us">assembly video</a>, in the end I had a working gate</span>
            </p>
            <iframe
                width={isMobile ? "380" : "560"}
                height={isMobile ? "" : "315"}
                src="https://www.youtube.com/embed/NiEXRBDkU_o?si=VZ7er3nZQYlcgGWh"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <p>
                <span>Along with the gate cames the DHD (dial home device), the PCB for it I ordered from PCBWay because I don't have the skill or equipment to do SMD parts</span>
            </p>
            <img alt="dog bowel platform" src="/images/stargate/dhd.jpg" />

            <p>
                <span>After all the the printing and electronics there was only one thing left to do,to paint the gate.</span>
                <br />
                <br />
                <span>I painted the platform to like rocks using base coats and dry brushing. The gate itself I opted not to paint becaus I don't have much trust in abilities to paint it in a way that will give it justice</span>
                <br />
                <br />
                <span>When putting it in the display shales the stairs ware sticking out too much so I modified one of the walls and re-printed a "plug" to fill the hole that was left where the stairs ware</span>
            </p>
            <img alt="dog bowel platform" src="/images/stargate/gate_in_display.jpg" />

        </div>
    )
}