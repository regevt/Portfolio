import { FC, useMemo } from "react";
import "./Home.css"
import { Card } from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import { Pages } from "../../Pages"
import { Footer } from "../../Components/Footer/Footer";



export const Home: FC = () => {

    const cards = useMemo(() => {
        return Pages?.map((proj, i) => <Link to={`project/${proj.data.id}`} key={i}><Card project={proj.data} /></Link>)
    }, [])

    return <div className="home">
        <div className="content">
            <div className="card-grid">
                {cards}
            </div>
            {/* <div className="about">
                <div>
                    <img src={`${process.env.PUBLIC_URL || ''}/images/me.png`} alt="Regev Tal-Snijder" />
                    <div className="content">
                        <span className="header">Regev Tal-Snijder</span>
                        <span className="description">Software developer, hobbyist woodworker and tinkerer</span>
                        <Link to={"/about"}>Read more →</Link>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    </div>
}