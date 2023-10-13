import { useEffect, useState } from "react"
import style from "./updateScript.module.css"
import { MdDeleteForever } from 'react-icons/md';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { LoaderIcon, Toaster, toast } from 'react-hot-toast';

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

    // solicitu Update Script
    const [isEditing, setisEditing] = useState(false)
    const handlerUpdate = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/updateScript/${id}`, inputUpdateScript);
            response && setisEditing(!isEditing)
            isEditing && toast.success(response.data.message)
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
                    <Toaster />

                </div>
            </div>
        </div>
    )
}

export default UpdateScript