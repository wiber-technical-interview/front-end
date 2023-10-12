import { useEffect, useState } from "react"
import style from "./updateScript.module.css"
import { MdDeleteForever } from 'react-icons/md';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export interface UpdateScript {
    name: string,
    description: string
}

const UpdateScript = () => {
    const navigate = useNavigate();

    let { id } = useParams();

    //estado script previo original 
    const [descriptioScript, setdescriptioScript] = useState({
        description: ""
    })
    //estado para gestionar los input
    const [inputUpdateScript, setIinputUpdateScript] = useState<UpdateScript>({
        name: "",
        description: ""
    })
    //carga de informacion scripts por ID 
    useEffect(() => {
        const getScriptById = async () => {
            let URL = `http://127.0.0.1:8000/updateScript/${id}`
            try {
                const response = await axios.get(URL)
                let lastUpdateScript = response.data.script.length - 1
                setdescriptioScript({
                    description: response.data.script[lastUpdateScript].description
                })
                setIinputUpdateScript({
                    name: response.data.name,
                    description: response.data.script[lastUpdateScript].description
                })
                return response.data
            } catch (error) {
                console.log(error);
            }
        }
        getScriptById()
    }, [])



    //Actualizar inputs para enviar cambios 
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIinputUpdateScript({
            ...inputUpdateScript,
            [event.target.name]: event.target.value
        })
    }

    // Update Script
    const [isEditing, setisEditing] = useState(false)

    const handlerUpdate = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/updateScript/${id}`, inputUpdateScript);
            response && setisEditing(!isEditing)
            isEditing && alert("guardado con exito")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    //manejar el disabled de guardar Script
    const [disabledButtonEdit, setDisabledButtonEdit] = useState(true)
    useEffect(() => {
        const isDescriptionChanged = descriptioScript.description.trim() !== inputUpdateScript.description.trim();
        setDisabledButtonEdit(!isDescriptionChanged);
    }, [inputUpdateScript]);



    // DELETE Script by ID
    const handlerDelete = async () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea borrar este script?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/updateScript/${id}`);
                navigate("/")
                console.log(response);
                
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className={style.container}>
            <div className={style.containerForm}>
                <div className={style.containerinput}>
                    <label htmlFor="nombre"> NOMBRE SCRIPT:</label>
                    <div className={style.input}>
                        <h4>
                            {inputUpdateScript ? inputUpdateScript.name : ""}
                        </h4>
                    </div>
                    <select>
                        <option>{descriptioScript.description}</option>
                    </select>
                </div>

                <div className={style.containerinput}>
                    <label htmlFor="nombre">INGRESE SCRIPT</label>
                    <textarea
                        id="description"
                        name="description"
                        value={inputUpdateScript ? inputUpdateScript.description : ""}
                        onChange={handlerChangeInput}
                        className={style.textTarea}
                        placeholder="Ingrese cuerpo del Script..."
                    />
                </div>
                <div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <button
                        className={style.buttonAddScript}
                        onClick={handlerUpdate}
                        disabled={disabledButtonEdit}>
                        Guardar Script
                    </button>
                    <button className={style.buttonDelete}
                        onClick={handlerDelete}
                        disabled={isEditing}>
                        <MdDeleteForever size={25} color='white' />
                        Borrar Script
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateScript