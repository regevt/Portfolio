import { FC } from "react";
import { useParams } from "react-router-dom"

export const Project: FC = () => {
    let params = useParams()
    const id = params.id;

    return <div style={{ color: "white" }}>id: {id}</div>
}