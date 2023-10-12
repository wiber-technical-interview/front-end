import React, { useState } from 'react'
import style from "./detailScript.module.css"
import { DataScript } from '../../components/itemScript/itemScript'


const DetailScript = (props: DataScript) => {



    const [isEditing, setisEditing] = useState(false)

    return (
        <div className={style.container}>
            <div className={style.containerTitles}>
                <div className={style.containerItem}>
                    <h2>Identificador:</h2>
                    <h3>{props._id}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Nombre:</h2>
                    <h3>{props.name}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Creacion:</h2>
                    <h3>{props.creationDate.substring(0, 10)}</h3>
                </div>
                <div className={style.containerItem}>
                    <h2>Ultima Actualización:</h2>
                    <h3>{props.updateDate.substring(0, 10)}</h3>
                </div>

            </div>
            <div className={style.containerScript}>
                {isEditing ? (
                    <textarea
                        value={props.script}
                        className={style.containerTextarea}
                        onChange={(e) => {
                        }}
                    />
                ) : (
                    <pre dangerouslySetInnerHTML={{ __html: props.script }} />
                )}
            </div>
            <div style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", display: "flex" }}>
             
                        <button onClick={props.closeModal}
                            className={style.buttonClose}>Cerrrar
                        </button>
             
            </div>
        </div>
    )
}

export default DetailScript