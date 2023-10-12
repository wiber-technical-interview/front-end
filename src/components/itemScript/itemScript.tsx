import { useState } from "react"
import style from "./itemScript.module.css"
import DetailScript from "../detailScript/detailScript";
import { useNavigate } from "react-router-dom";


export interface DataScript {
    _id: string,
    identifier: string
    name: string,
    creationDate: string,
    updateDate: string,
    script: string,
    closeModal?: () => void;
}

const ItemScript = (props: DataScript) => {
    const navigate = useNavigate();

    const [visibleModal, setVisibleModal] = useState(false)
    const handleModalView = () => {
        setVisibleModal(!visibleModal)
    }

    const handlerEditClick = () => {
        navigate(`/updateScript/${props._id}`);
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
                <h6>{props.updateDate.substring(0, 10)}</h6>
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
                        _id={props._id}
                        identifier={props.identifier}
                        name={props.name}
                        creationDate={props.creationDate}
                        updateDate={props.updateDate}
                        script={props.script}
                        closeModal={handleModalView} />
                </div>
            }
        </div>
    )
}

export default ItemScript