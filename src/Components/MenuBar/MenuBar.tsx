import { FC } from "react";
import "./MenuBar.css";
import Logo from "../../Assets/Images/logo.png"


export const MenuBar: FC = () => {
    return <div className="menu">
        <div>
            <span>Regev Makes</span>
        </div>
        <img src={Logo} alt="logo" width="100px" />
        <div className="items">
            <span><b>EN</b>/NL</span>
            <span>Project</span>
            <span>About</span>
            <span>Contact</span>
        </div>
    </div>
}