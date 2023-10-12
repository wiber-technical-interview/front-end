import React, { useEffect, useState } from 'react'
import style from "./detailScript.module.css"
import { DataScript } from '../../components/itemScript/itemScript'


const DetailScript = (props: DataScript) => {


    // estado para controlar la renderizacion de las versiones de script
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(props.script.length - 1);
    const handleSelectChange = (event: any) => {
        const selectedIndex = event.target.value;
        setSelectedOptionIndex(selectedIndex);
    };

    return (
        <div className={style.container}>
            <div className={style.containerTitles}>
                <div className={style.containerItem}>
                    <h2>Identificador:</h2>
                    <h3>{props.identifier}</h3>
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
                    <h2>Actualización:</h2>
                    {/* cargar versiones del Script */}
                    <select
                        onChange={handleSelectChange}
                        className={style.select}
                        value={selectedOptionIndex}>
                        {props.script.map((item, index) =>
                            <option key={index} value={index}>
                                {item.updateDate.substring(0, 10)} a {item.updateDate.substring(11, 16)}hs
                            </option>
                        )}
                    </select>
                </div>

            </div>
            <div className={style.containerScript}>
                <pre dangerouslySetInnerHTML={{ __html: props.script[selectedOptionIndex].description }} />
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