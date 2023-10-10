import { useState } from "react"
import style from "./itemScript.module.css"
import DetailScript from "../detailScript/detailScript";


export interface DataScript {
    id: number,
    name: string,
    creationDate: string,
    updateDate: string,
    script: string,
    closeModal?: () => void;
}

const ItemScript = (props: DataScript) => {

    const [visibleModal, setVisibleModal] = useState(false)
    const handleModal = () => {
        setVisibleModal(!visibleModal)
    }
    return (
        <div className={style.container}>
            <div className={style.column}>
                <h6>00{props.id}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.name}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.creationDate}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.updateDate}</h6>
            </div>
            <div className={style.column}>
                <button
                className={style.buttonView}
                    onClick={handleModal}>Ver / Editar
                </button>

            </div>
            {visibleModal &&
                <div>
                    <div className={style.containerModal}>
                    </div>
                    <DetailScript
                        id={props.id}
                        name={props.name}
                        creationDate={props.creationDate}
                        updateDate={props.creationDate}
                        script={props.script}
                        closeModal={handleModal} />
                </div>
            }
        </div>
    )
}

export default ItemScript