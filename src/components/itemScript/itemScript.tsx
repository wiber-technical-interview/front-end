import React from 'react'
import style from "./itemScript.module.css"


export interface DataScript{
    id:number,
    name:string,
    creationDate:string,
    updateDate:string,
}

const ItemScript = (props:DataScript) => {
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
                <button>Ver</button>
                <button>Editar</button>
            </div>

        </div>
    )
}

export default ItemScript