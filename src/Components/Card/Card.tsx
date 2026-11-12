import { FC, useContext, useMemo } from "react";
import "./Card.css"
import { PortfolioContext } from "../../Context/Store";


export interface CardProps {
    id: number;
}

export const Card: FC<CardProps> = ({ id }) => {


    const { state } = useContext(PortfolioContext);

    const project = useMemo(() => {
        return state.projects.find(p => p.id === id)
    }, [state, id])

    return <div className="card">
        <img src={require(`../../Assets/Images/${project?.projectName}/${project?.images?.[0]}`)} alt="card" />

        <div>
            <span className="title">{project?.titleEN}</span>
        </div>
    </div>
} 