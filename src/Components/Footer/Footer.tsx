import { FC } from "react";

export const Footer: FC = () => {
    return <div style={{
        borderTop: "1px solid white",
        // margin: "10px 0",
        padding: "20px",

        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px"
    }}>
        <span>Regev Tal-Snijder</span>
        <div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/regev-tal/">Linkedin</a> <span> | </span>
            <a target="_blank" rel="noreferrer" href="https://github.com/regevt">Github</a>
        </div>
    </div>
}