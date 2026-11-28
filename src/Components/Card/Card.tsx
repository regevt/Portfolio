import { FC } from "react";
import "./Card.css"
import { Project } from "../../types/types";
import { useLocale } from "../../hooks/useLocale";


export interface CardProps {
    project: Project;
}

export const Card: FC<CardProps> = ({ project }) => {
    const { pick, category } = useLocale();
    const spec = project.specs?.map(s => pick(s.value, s.valueNL || s.value)).join(" · ");
    const title = pick(project.titleEN, project.titleNL || project.titleEN);
    const description = pick(project.descriptionEN, project.descriptionNL || project.descriptionEN);

    return <div className="card">
        <div className="card-media">
            <img src={`${process.env.PUBLIC_URL || ''}/images/${project.projectName}/${project.image}`} alt={title} />
        </div>
        <div className="card-title-row">
            <h2 className="card-title">{title}</h2>
            <span className="card-category">{category(project.category)}</span>
        </div>
        {description && <p className="card-description">{description}</p>}
        {spec && <span className="card-spec">{spec}</span>}
    </div>
}
