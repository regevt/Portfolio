import { FC } from "react"
import "./page.css"

export const Data = {
    id: 2,
    titleEN: "planters",
    titleNL: "",
    projectName: "planters",
    descriptionEN: "",
    descriptionNL: "",
    image: "planter1.jpg"
}

export const Planter1: FC = () => {
    return (
        <div className="page">
            <h1 className="title">First real woodworking project</h1>
            <div >
                <p >
                    <span>As a first foray into woodworking I decided to go for one of the classic projects, a planter with an overhanging lip.</span>
                </p>
                <p >
                    <span>When moving to the house we decided that the old shed will need to be replaced,
                        as I did not know if the wood will be of use or not I decided to keep it, apparently it did.</span>
                </p>
                <p>
                    <span>
                        After planning the wood with my brand new electric hand plater, I cut the wood with a 45 degree joint on all sides. glued it and added the rim.
                    </span>
                </p>
                <p>
                    <span><b>Sanding first, you idiot.</b> I forgot that I need to sand it before the painting, so elbow grease it is.</span>
                </p>
                <p>
                    <span>For the paint I used dark gray paint that I got with the new shed, in the end I thing it ended up quite good for first woodworking project</span>
                </p>
            </div>
            <div style={{ marginTop: "30px" }} >
                <img alt="first planter" src="/images/planters/planter1.jpg" />
            </div>

            <h2 className="title" >Let's try again, but different</h2>
            <p>
                <span>
                    This time I went for the clean wood, I also wanted to try my new plunge router
                </span>
                <br />
                <span>
                    For the finish I used this time linseed oil, from my understanding it should give the wood some protection from the wet soil
                </span>
            </p>
            <div style={{ marginTop: "30px" }} >
                <img alt="second planter" src="/images/planters/planter2.jpg" />
            </div>
        </div>
    )
}