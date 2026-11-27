import { FC } from "react";
import "./Card.css"
import { Project } from "../../types/types";


export interface CardProps {
    project: Project;
}

export const Card: FC<CardProps> = ({ project }) => {
    const spec = project.specs?.map(s => s.value).join(" · ");

    return <div className="card">
        <div className="card-media">
            <img src={`${process.env.PUBLIC_URL || ''}/images/${project.projectName}/${project.image}`} alt={project.titleEN} />
        </div>
        <div className="card-title-row">
            <h2 className="card-title">{project.titleEN}</h2>
            <span className="card-category">{project.category}</span>
        </div>
        {project.descriptionEN && <p className="card-description">{project.descriptionEN}</p>}
        {spec && <span className="card-spec">{spec}</span>}
    </div>
}
