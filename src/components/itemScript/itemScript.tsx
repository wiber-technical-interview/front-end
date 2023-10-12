import { useState } from "react"
import style from "./itemScript.module.css"
import DetailScript from "../detailScript/detailScript";
import { useNavigate } from "react-router-dom";
import { DescriptionScript } from "../../pages/home/home";


export interface DataScript {
    id: string,
    identifier: string
    name: string,
    creationDate: string,
    script: DescriptionScript[],
    closeModal?: () => void;
}

const ItemScript = (props: DataScript) => {
    const navigate = useNavigate();

    const [visibleModal, setVisibleModal] = useState(false)
    const handleModalView = () => {
        setVisibleModal(!visibleModal)
    }

    const handlerEditClick = () => {
        navigate(`/updateScript/${props.id}`);
    };



    return (
        <div className={style.container}>
            <div className={style.column}>
                <h6>{props.identifier}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.name}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.creationDate.substring(0, 10)}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.script[props.script.length -1].updateDate.substring(0, 10)}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.script.length}</h6>
            </div>
            <div className={style.column}>
                <button
                    className={style.buttonView}
                    onClick={handleModalView}>Ver
                </button>
                <button
                    className={style.buttonView}
                    onClick={handlerEditClick}>Editar
                </button>
            </div>
            {visibleModal &&
                <div>
                    <div className={style.containerModal}>
                    </div>
                    <DetailScript
                        id={props.id}
                        identifier={props.identifier}
                        name={props.name}
                        creationDate={props.creationDate}
                        script={props.script}
                        closeModal={handleModalView} />
                </div>
            }
        </div>
    )
}

export default ItemScript