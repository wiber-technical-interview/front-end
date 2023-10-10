import React, { useState } from 'react'
import style from "./detailScript.module.css"
import { DataScript } from '../../components/itemScript/itemScript'
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';


const DetailScript = (props: DataScript) => {

    const handlerDelete = () => {
        window.confirm("¿Está seguro de que desea borrar este script?");
    }

    const [isEditing, setisEditing] = useState(false)
    const handlerEdit = () => {
        setisEditing(!isEditing)
        isEditing && alert("guardado con exito")
    }




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
                <button className={style.buttonDelete}
                    onClick={handlerDelete}
                    disabled={isEditing}>
                    <MdDeleteForever size={35} color='white' />
                </button>
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
                {isEditing ? (
                    <>
                        <button onClick={handlerEdit}
                            className={style.buttonSave}>Guardar
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={props.closeModal}
                            className={style.buttonClose}>Cerrrar
                        </button>
                    </>
                )}

                <button onClick={handlerEdit}
                    className={style.buttonEdit}
                    disabled={isEditing}>
                    <AiFillEdit size={23} color='white' />
                </button>
            </div>
        </div>
    )
}

export default DetailScript