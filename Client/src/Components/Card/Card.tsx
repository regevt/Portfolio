import { FC } from "react";
import "./Card.css"
import card from "../../Assets/Images/cover.jpg"


export const Card: FC = () => {
    return <div className="card">
        <img src={card} alt="card" />
        <span className="title">title</span>
        <span className="description">description</span>
    </div>
} 