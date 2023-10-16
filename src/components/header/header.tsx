import React, { useState } from 'react'
import style from "./header.module.css"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
import { MdManageSearch } from 'react-icons/md';
import axios from 'axios';
import { addScriptByName, deleteScriptByName } from '../../redux/actions';
import { useDispatch } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast';


function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isLocationHome = location.pathname !== "/";

    //estado para buscar Script por nombres 
    const [inputValue, setInputValue] = useState("")
    const handlerCHhngeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const [disabledButtonAll, setisDisabledButtonAll] = useState(true)

    // solicitud buscar script por nombre  
    const searchScriptByName = async () => {
        try {
            let URL = `https://server-app-mv4g.onrender.com/${inputValue}`
            const response = await axios.get(URL)
            if (response.data.length) {
                dispatch(addScriptByName(response.data))
                setisDisabledButtonAll(false)
            } else {
                toast.error("no se encontraron Scripts con ese nombre", {
                    duration: 1000,
                    style: {
                        marginRight: "500px",
                        marginTop: "7px"
                    }
                })
            }
            setInputValue("")
        } catch (error) {
            console.log(error);
        }
    }

    // resetear el estado de script por nombres
    const resetScriptOnClick = () => {
        dispatch(deleteScriptByName())
        setisDisabledButtonAll(true)
    }
    // Navegadores 
    const createScriptOnclick = () => {
        navigate("createScript")
    }
    const navigateToHome = () => {
        navigate("/")
    }

    return (
        <div>
            {isLocationHome ? (
                <div className={style.container}>
                    <Toaster />
                    <img src={logo} alt='logo' className={style.imageLogo} />
                    <div className={style.containerTitle}>
                        <h2 className={style.title}>WIBER - Internet para exigentes</h2>
                        <p>Modelo de prueba para la gestion de Scripts</p>
                    </div>
                    <div className={style.searchContainer}>
                    </div>
                    <button className={style.buttonCreate} onClick={navigateToHome}>Volver</button>
                </div>
            ) : (
                <div className={style.container}>
                    <img src={logo} alt='logo' />
                    <div className={style.containerTitle}>
                        <h2 className={style.title}>WIBER - Internet para exigentes</h2>
                        <p>Modelo de prueba para la gestion de Scripts</p>
                    </div>
                    <div className={style.searchContainer}>
                        <input className={style.searchScript}
                            onChange={handlerCHhngeInput}
                            value={inputValue}
                            placeholder='Buscar Script.....'></input>
                        <button
                            disabled={inputValue ? false : true}
                            className={style.buttonSearch}
                            onClick={searchScriptByName}>
                            <MdManageSearch size={30} color='white' />
                        </button>
                        <button
                            disabled={disabledButtonAll}
                            className={style.buttonAll}
                            onClick={resetScriptOnClick}>
                            <h3>Ver todos</h3>
                        </button>
                    </div>
                    <button className={style.buttonCreate}
                        onClick={createScriptOnclick}>Crear Script
                    </button>
                </div>
            )}
        </div>




    )
}

export default Header