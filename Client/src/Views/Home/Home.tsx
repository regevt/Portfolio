import { FC } from "react";
import "./Home.css"
import { Card } from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import me from "../../Assets/Images/me.png";
import planter1 from "../../Assets/Images/planter1.jpg";
import planter2 from "../../Assets/Images/planter2.jpg";
import platform from "../../Assets/Images/cover.jpg";



export const Home: FC = () => {
    return <div className="home">
        <div className="content">
            <div className="card-grid">
                <Card image={planter1} title={"Planter"} id={0} />
                <Card image={planter2} title={"Planter"} id={0} />
                <Card image={platform} title={"Platform"} id={0} />
            </div>
            <div className="about">
                <div>
                    <img src={me} alt="Regev Tal-Snijder" />
                    <div className="content">
                        <span className="header">Regev Tal-Snijder</span>
                        <span className="description">Software developer and a hobbyist woodworker</span>
                        <Link to={"/about"}>Read more →</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
}