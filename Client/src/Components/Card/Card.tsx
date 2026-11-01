import { FC } from "react";
import "./Card.css"


export interface CardProps {
    image: string;
    title: string;
    id: number;
}

export const Card: FC<CardProps> = ({ image, title }) => {
    return <div className="card">
        <img src={image} alt="card" />
        <div>
            <span className="title">{title}</span>
        </div>
    </div>
} 