import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import ItemScript from '../../components/itemScript/itemScript'
import axios from 'axios'

export interface DescriptionScript{
    updateDate:string
    description:string
}

export interface DataGetScript {
    _id:string
    identifier:string
    name: string
    creationDate:string
    script:DescriptionScript[]
}


const Home = () => {

    //carga de scripts 
    const [dataScripts, setDataScripts] = useState<DataGetScript[]>()
    useEffect(() => {
        const getAllScrips = async () => {
            let URL = "http://127.0.0.1:8000/"
            try {
                const response = await axios.get(URL)
                setDataScripts(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllScrips()
    }, [])


    return (
        <>
            <div className={style.container}>
                <div className={style.scriptDetails}>
                    <div className={style.titleDetails}>
                        <h2>Identificador</h2>
                        <h2>Nombre </h2>
                        <h2>Fecha creación</h2>
                        <h2>Actualización</h2>
                        <h2>Nº Versiones</h2>
                        <h2>Acciones</h2>
                    </div>
                    {dataScripts !== undefined && dataScripts.map((item) => (
                        <div key={item._id}>
                            <ItemScript
                                id={item._id}
                                identifier={item.identifier}
                                name={item.name}
                                creationDate={item.creationDate}
                                script={item.script}
                            />
                        </div>

                    ))}
                </div>
            </div>

        </>

    )
}

export default Home