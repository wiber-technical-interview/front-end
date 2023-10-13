import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import ItemScript from '../../components/itemScript/itemScript'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAllScripts } from '../../redux/actions'
import { useSelector } from 'react-redux';
import { DataScript } from '../../redux/reducer'
import logo from "../../assets/imageLogo.jpg"
import { MdDeleteForever } from 'react-icons/md';

export interface DescriptionScript {
    updateDate: string
    description: string
}

export interface DataGetScript {
    _id: string
    identifier: string
    name: string
    creationDate: string
    script: DescriptionScript[]
}


const Home = () => {

    const dispatch = useDispatch()

    //Guarda y Carga de scripts desde REDUX 
    let dataScripts = useSelector((state: DataScript) => state.dataScripts)
    const getAllScrips = async () => {
        let URL = "http://127.0.0.1:8000/"
        try {
            const response = await axios.get(URL)
            dispatch(addAllScripts(response.data))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllScrips()
    }, [])


    return (
        <>
            <div className={style.container}>
                <div className={style.scriptDetails}>
                    <div className={style.titleDetails}>
                        <div className={style.iconDelete}>
                        <MdDeleteForever size={30} color='white' />
                        </div>
                        <h2>Identificador</h2>
                        <h2>Nombre </h2>
                        <h2>Fecha creación</h2>
                        <h2>Actualización</h2>
                        <h2>Nº Versiones</h2>
                        <h2>Acciones</h2>
                    </div>
                    {dataScripts.length ?
                        dataScripts.map((item) => (
                            <div key={item._id}>
                                <ItemScript
                                    id={item._id}
                                    identifier={item.identifier}
                                    name={item.name}
                                    creationDate={item.creationDate}
                                    script={item.script}
                                />
                            </div>
                        )) : (
                            <div className={style.title}>
                                <h2>Ups! no hay Script cargados. </h2>
                                <h4>Dirigite a "CREAR SCRIPT" y agregalos para verlos en la lista </h4>
                                <img src={logo} alt='logo' className={style.imageLogo} />
                            </div>
                        )}
                </div>
            </div>

        </>

    )
}

export default Home