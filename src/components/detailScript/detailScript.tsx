import React from 'react'
import style from "./detailScript.module.css"
import { DataScript } from '../../components/itemScript/itemScript'

const DetailScript = (props: DataScript) => {

    return (
        <div className={style.container}>
            <div className={style.containerTitles}>
                <div className={style.containerItem}>
                    <h2>Identificador:</h2>
                    <h3>00{props.id}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Nombre:</h2>
                    <h3>{props.name}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Creacion:</h2>
                    <h3>{props.creationDate}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Ultima Actualización:</h2>
                    <h3>{props.updateDate}</h3>
                </div>
                <button>clerar</button>
            </div>
            <div className={style.containerScript}>
            <pre dangerouslySetInnerHTML={{ __html: props.script }} />
            </div>
            <button onClick={props.closeModal}
                className={style.buttonCreate}>Cerrrar Script</button>
        </div>
    )
}

export default DetailScript