import { FC } from "react";
import "./MenuBar.css";


export const MenuBar: FC = () => {
    return <div className="menu">
        <div>
            <span>My Woodworking</span>
        </div>
        <div className="items">
            <span><b>EN</b>/NL</span>
            <span>Project</span>
            <span>About</span>
            <span>Contact</span>
        </div>
    </div>
}