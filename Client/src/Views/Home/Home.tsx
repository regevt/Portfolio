import { FC } from "react";
import "./Home.css"
import cover from "../../Assets/Images/cover.jpg"

export const Home: FC = () => {
    return <div className="home">
        <div className="cover-image">
            <img src={cover} alt="cover" width="90%" />
        </div>
    </div>
}