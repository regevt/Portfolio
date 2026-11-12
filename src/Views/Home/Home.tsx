import { FC, useContext, useMemo } from "react";
import "./Home.css"
import { Card } from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import me from "../../Assets/Images/me.png";
import { PortfolioContext } from "../../Context/Store";



export const Home: FC = () => {

    const { state } = useContext(PortfolioContext);

    const cards = useMemo(() => {
        return state?.projects?.map((proj, i) => <Link to={`project/${proj.id}`} key={i}><Card id={proj.id} /></Link>)
    }, [state])

    return <div className="home">
        <div className="content">
            <div className="card-grid">
                {cards}
            </div>
            <div className="about">
                <div>
                    <img src={me} alt="Regev Tal-Snijder" />
                    <div className="content">
                        <span className="header">Regev Tal-Snijder</span>
                        <span className="description">Software developer, hobbyist woodworker and tinkerer</span>
                        <Link to={"/about"}>Read more →</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
}