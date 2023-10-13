import React, { useEffect, useState } from 'react'
import style from "./detailScript.module.css"
import { DataScript } from '../../components/itemScript/itemScript'
import { deleteScriptById } from '../../redux/actions';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const DetailScript = (props: DataScript) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();


    // estado para controlar la renderizacion de las versiones de script
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(props.script.length - 1);
    const handleSelectChange = (event: any) => {
        const selectedIndex = event.target.value;
        setSelectedOptionIndex(selectedIndex);
    };

    //navegacion para actualizar script
    const handlerEditClick = () => {
        navigate(`/updateScript/${props.id}`);
    };

    // DELETE Script by ID
    const handlerDelete = async () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea borrar este script?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/updateScript/${props.id}`);
                toast.success(response.data.message)
                dispatch(deleteScriptById(props.id))
            } catch (error) {
                toast.error("El Script no se pudo eliminar correctamente");
                console.log(error);
            }
        }
    }

    return (
        <div className={style.container}>
            <div className={style.containerTitles}>
                <div className={style.containerItem}>
                    <h2>Identificador:</h2>
                    <h3>Sc-{props.id.substring(0, 7)}</h3>
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
                    <h2>Versiones:</h2>
                    {/* cargar versiones del Script */}
                    <select
                        onChange={handleSelectChange}
                        className={style.select}
                        value={selectedOptionIndex}>
                        {props.script.map((item, index) =>
                            <option key={index} value={index}>
                                V-0{index} / {item.updateDate}
                            </option>
                        )}
                    </select>
                </div>
            </div>
            <div className={style.containerScript}>
                <pre dangerouslySetInnerHTML={{ __html: props.script[selectedOptionIndex].description }} />
            </div>
            <div style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", display: "flex" }}>
                <button
                    className={style.buttonClose}
                    onClick={handlerEditClick}>
                    <FaEdit size={19} color='white' />Editar
                </button>

                <button onClick={handlerDelete}
                    className={style.buttonDelete}>
                    <MdDeleteForever size={19} color='white' />
                    Borrar Script
                </button>
                <button onClick={props.closeModal}
                    className={style.buttonClose}>
                    <IoMdCloseCircleOutline size={19} color='white' />Cerrrar
                </button>
                <Toaster />
            </div>
        </div>
    )
}

export default DetailScript