import React from 'react'
import style from "./header.module.css"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router';

function Header() {

    const navigate = useNavigate();



    const createScript = () => {
        navigate("createScript")
    }

    return (
        <div className={style.container}>
            <img src={logo} alt='logo' />
            <div className={style.containerTitle}>
                <h2 className={style.title}>WIBER - Internet para exigentes</h2>
                <p>Modelo de prueba para la gestion de Scripts</p>
            </div>
            <div className={style.searchContainer}>
                <input className={style.searchScript}
                    placeholder='Buscar Script.....'></input>
                <button>Buscar</button>
            </div>
            <button className={style.buttonCreate} onClick={createScript}>Crear Script</button>
        </div>
    )
}

export default Header