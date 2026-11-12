import { FC, useState } from "react";
import "./MenuBar.css";
import Logo from "../../Assets/Images/logo.png"
import { Link } from "react-router";


export const MenuBar: FC = () => {

    const [lang, setLang] = useState(0)

    return <div className="menu">
        <Link className="logo" to="/"><img src={Logo} alt="logo" width="100px" /></Link>
        <div className="siteName">
            <span>Regev Makes</span>
        </div>
        <div className="items">
            <select value={lang} className="language" defaultValue={0} onChange={(e) => {
                e.target.blur();
                setLang(Number(e.target.value))
            }}>
                <option value={0} >🇬🇧 EN</option>
                <option value={1}>🇳🇱 NL</option>
            </select>
            {/* <span><b>EN </b>/ NL 🇳🇱</span> */}
            {/* <span>Project</span> */}
            <span>About & contact</span>
            {/* <span>Contact</span> */}
        </div>
    </div>
}