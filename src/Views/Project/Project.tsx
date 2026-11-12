import { FC, useContext, useMemo } from "react";
import { useParams } from "react-router-dom"
import { PortfolioContext } from "../../Context/Store";
import "./Project.css"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";



export const Project: FC = () => {
    let params = useParams()

    const { state } = useContext(PortfolioContext);

    const project = useMemo(() => {
        return state.projects.find(p => p.id === Number(params.id))
    }, [state, params])



    return <div className="project">
        <div className="description">
            <ReactQuill className='preview' modules={{
                toolbar: false, readonly: true
            }} theme="bubble" value={project?.descriptionEN} />
        </div>
        <div className="images">
            {project?.images.map((image, i) => (<a key={i} href={require(`../../Assets/Images/${project?.projectName}/${image}`)} target="_blank" rel="noopener noreferrer">
                <img src={require(`../../Assets/Images/${project?.projectName}/${image}`)} alt="card" />
            </a>))}
        </div>

    </div>
}