import { FC } from "react";
import "./Card.css"
import { Project } from "../../types/types";


export interface CardProps {
    project: Project;
}

export const Card: FC<CardProps> = ({ project }) => {
    return <div className="card">
        <img src={`${process.env.PUBLIC_URL || ''}/images/${project?.projectName}/${project?.image}`} alt="card" />

        <div>
            <span className="title">{project?.titleEN}</span>
        </div>
    </div>
} 