import React from 'react'
import style from "./home.module.css"
import ItemScript from '../../components/itemScript/itemScript'
import data from "../../data.json"
const Home = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.scriptDetails}>
                    <div className={style.titleDetails}>
                        <h2>Identificador</h2>
                        <h2>Nombre </h2>
                        <h2>Fecha creación</h2>
                        <h2>Fecha actualización</h2>
                        <h2>Acciones</h2>
                    </div>
                    {data.map((item) => (
                        <ItemScript
                            id={item.id}
                            name={item.name}
                            creationDate={item.creationDate}
                            updateDate={item.creationDate}
                            script={item.script}
                        />
                    ))}
                </div>
            </div>
        
        </>

    )
}

export default Home