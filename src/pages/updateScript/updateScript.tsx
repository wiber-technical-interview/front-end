import { useEffect, useState } from "react"
import style from "./updateScript.module.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { DataScript } from "../../redux/reducer";

export interface UpdateScriptModel {
    name?: string,
    description?: string
}

const UpdateScript = () => {
    const navigate = useNavigate()
    let { id } = useParams();

    //carga info del script 
    let scripts = useSelector((state: DataScript) => state.dataScripts)
    let dataScripById = scripts.find((item) => item._id === id)
    let textScript = dataScripById?.script[dataScripById?.script.length - 1].description

    //estado para gestionar los input
    const [inputUpdateScript, setIinputUpdateScript] = useState<UpdateScriptModel>({
        name: dataScripById?.name,
        description: textScript
    })


    //Actualizar inputs para enviar cambios 
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIinputUpdateScript({
            ...inputUpdateScript,
            [event.target.name]: event.target.value
        })
    }

    // solicitud Update Script
    const handlerUpdate = async () => {
        try {
            const response = await axios.put(`https://server-app-mv4g.onrender.com/updateScript/${id}`, inputUpdateScript);
            if (response.status === 200) {
                toast.success(response.data.message,{ duration: 400 })
                setTimeout(() => {
                    navigate(`/`)
                }, 1300);
            } else {
                toast.error("Error al actulizar el script: " + response.data.error);
            }
        } catch (error) {
            toast.error("Error al actulizar el script: ");
        }
    }


    //manejar el disabled de guardar Script
    const [disabledButtonEdit, setDisabledButtonEdit] = useState(true)
    useEffect(() => {
        const isDescriptionChanged = textScript?.trim() !== inputUpdateScript.description?.trim();
        setDisabledButtonEdit(!isDescriptionChanged);
    }, [inputUpdateScript, textScript]);



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