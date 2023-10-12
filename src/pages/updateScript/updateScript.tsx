import { useEffect, useState } from "react"
import style from "./updateScript.module.css"
import { MdDeleteForever } from 'react-icons/md';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export interface UpdateScript {
    id?: string,
    name: string,
    description: string
}

const UpdateScript = () => {
    const navigate = useNavigate();
    const [isEditing, setisEditing] = useState(false)

    let { id } = useParams();
    //estado para gestionar los input
    const [inputDataScript, setInputDataScript] = useState<UpdateScript>({
        name: "",
        description: ""
    })
    //carga de informacion scripts por ID 
    useEffect(() => {
        const getScriptById = async () => {
            let URL = `http://127.0.0.1:8000/updateScript/${id}`
            try {
                const response = await axios.get(URL)
                setInputDataScript({
                    name: response.data.name,
                    description: response.data.script[0].description
                })
            } catch (error) {
                console.log(error);
            }
        }
        getScriptById()
    }, [id])

    //actualizar inputs para enviar cambios 
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputDataScript({
            ...inputDataScript,
            [event.target.name]: event.target.value
        })
    }

    // Update Script
    const handlerUpdate = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/updateScript`,inputDataScript);
            setisEditing(!isEditing)
            isEditing && alert("guardado con exito")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }




    // DELETE Script by ID
    const handlerDelete = async () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea borrar este script?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/updateScript/${id}`);
                navigate("/")
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className={style.container}>
            <div className={style.containerForm}>
                <div className={style.containerinput}>
                    <label htmlFor="nombre">INGRESE NOMBRE:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputDataScript ? inputDataScript.name : ""}
                        onChange={handlerChangeInput}
                        className={style.input}
                        placeholder="Ingrese nombre del Script..."
                    />
                </div>

                <div className={style.containerinput}>
                    <label htmlFor="nombre">INGRESE SCRIPT</label>
                    <textarea
                        id="description"
                        name="description"
                        value={inputDataScript ? inputDataScript.description : ""}
                        onChange={handlerChangeInput}
                        className={style.textTarea}
                        placeholder="Ingrese cuerpo del Script..."
                    />
                </div>
                <div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <button className={style.buttonAddScript}
                        onClick={handlerUpdate}>Guardar Script
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