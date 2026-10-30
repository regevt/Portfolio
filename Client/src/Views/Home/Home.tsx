import { FC } from "react";
import "./Home.css"
import cover from "../../Assets/Images/cover.jpg"
import { Card } from "../../Components/Card/Card";

export const Home: FC = () => {
    return <div className="home">
        <div className="cover-image">
            <img src={cover} alt="cover" width="90%" />
        </div>

        <div className="content">
            <div className="subTitle">
                <span>Featured work</span>
                <a href="#">All projects →</a>
            </div>
            <div className="card-grid">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    </div>
}