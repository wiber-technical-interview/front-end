import { useState } from "react"
import style from "./itemScript.module.css"
import DetailScript from "../detailScript/detailScript";
import { useNavigate } from "react-router-dom";
import { DescriptionScript } from "../../pages/home/home";
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { deleteScriptById } from "../../redux/actions";
import { useDispatch } from 'react-redux'


export interface DataScript {
    id: string,
    identifier: string
    name: string,
    creationDate: string,
    script: DescriptionScript[],
    closeModal?: () => void;
}

const ItemScript = (props: DataScript) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    //estado para actualizar script
    const [visibleModal, setVisibleModal] = useState(false)
    const handleModalView = () => {
        setVisibleModal(!visibleModal)
    }


    // DELETE Script by ID
    const handlerDelete = async () => {
        const confirmDelete = window.confirm("¿Está seguro de que desea borrar este script?");
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://127.0.0.1:8000/updateScript/${props.id}`);
                if (response.status === 200) {
                    dispatch(deleteScriptById(props.id));
                    toast.success("Script eliminado exitosamente");
                } else {
                    toast.error("Error al eliminar el script: " + response.data.error);
                }
            } catch (error) {
                toast.error("El Script no se pudo eliminar correctamente");
                console.log(error);
            }
        }
    }
    return (
        <div className={style.container}>
            <Toaster />
            <button className={style.buttonDelete}
                onClick={handlerDelete}
                disabled={false}>
                <MdDeleteForever size={17} color='white' />
            </button>
            <div className={style.column}>
                <h6>Sc-{props.id.substring(0, 10)}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.name}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.creationDate}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.script[props.script.length - 1].updateDate}</h6>
            </div>
            <div className={style.column}>
                <h6>{props.script.length}</h6>
            </div>
            <div className={style.column}>
                <button
                    className={style.buttonView}
                    onClick={handleModalView}>Ver
                </button>
            </div>
            {visibleModal &&
                <div>
                    <div className={style.containerModal}>
                    </div>
                    <DetailScript
                        id={props.id}
                        identifier={props.identifier}
                        name={props.name}
                        creationDate={props.creationDate}
                        script={props.script}
                        closeModal={handleModalView}
                    />
                </div>
            }
        </div>
    )
}

export default ItemScript