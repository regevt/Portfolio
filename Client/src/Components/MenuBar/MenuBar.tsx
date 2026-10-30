import { FC } from "react";
import "./MenuBar.css";


export const MenuBar: FC = () => {
    return <div className="menu">
        <div>
            <label>My Woodworking</label>
        </div>
        <div className="items">
            <label>Project</label>
            <label>About</label>
            <label>Contact</label>
        </div>
    </div>
}