import { FC } from "react";
import "./Footer.css";

export const Footer: FC = () => {
    return <footer className="footer">
        <div className="wrap footer-content">
            <span>© {new Date().getFullYear()} Regev Tal-Snijder</span>
            <span className="footer-links">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regev-tal/">LinkedIn ↗</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/regevt">GitHub ↗</a>
            </span>
        </div>
    </footer>
}
