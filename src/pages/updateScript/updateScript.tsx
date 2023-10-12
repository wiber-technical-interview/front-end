import { useState } from "react"
import style from "./updateScript.module.css"
import { MdDeleteForever } from 'react-icons/md';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


function UpdateScript() {
    const navigate = useNavigate();
    const [isEditing, setisEditing] = useState(false)
    const handlerEdit = () => {
        setisEditing(!isEditing)
        isEditing && alert("guardado con exito")
    }

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const _id = queryParams.get("_id");
    const identifier = queryParams.get("identifier");
    const name = queryParams.get("name");
    const creationDate = queryParams.get("creationDate");
    const updateDate = queryParams.get("updateDate");
    const script = queryParams.get("script");

    const handlerDelete = async () => {
      const confirmDelete = window.confirm("¿Está seguro de que desea borrar este script?");
      if (confirmDelete) {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/updateScript/${_id }`);
            console.log(response);
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
                        id="nombre"
                        name="nombre"
                        /*  value={scriptContent}  */
                        onChange={() => { }}
                        className={style.input}
                        placeholder="Ingrese nombre del Script..."
                    />
                </div>

                <div className={style.containerinput}>
                    <label htmlFor="nombre">INGRESE SCRIPT</label>
                    <textarea
                        id="description"
                        name="description"
                        /*  value={""} */
                        onChange={() => { }}
                        className={style.textTarea}
                        placeholder="Ingrese cuerpo del Script..."
                    />
                </div>
                <div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <button className={style.buttonAddScript}
                        onClick={handlerEdit}>Guardar Script
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