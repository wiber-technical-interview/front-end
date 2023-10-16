import { useEffect, useState } from "react"
import style from "./createScript.module.css"
import axios from "axios"
import { toast } from 'react-hot-toast';


export interface PostScript {
  name: string,
  script: string
}

const CreateScript = () => {


  const [inputValue, setInputValue] = useState<PostScript>({
    name: "",
    script: ""
  })


  //control de la visualizacion del boton 
  const [disabledButtonCreate, setDisabledButtonCreate] = useState(true)
  useEffect(() => {
    const isInputChanged = inputValue.name.length < 3 || inputValue.script === ""
    setDisabledButtonCreate(isInputChanged)
  }, [inputValue])


  //cargar valores al estado 
  const handlerInputValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }


  //Solicitud para cargar un nuevo Script 
  const postScriptOnClick = async () => {
    let URL = "https://backend-fastapi-production.up.railway.app/createScript"
    try {
      const response = await axios.post(URL, inputValue)
      if (response.status) {
        setInputValue({
          name: "",
          script: ""
        })
        toast.success(response.data.message,{ duration: 1000 });
      } else {
       toast.error("Error al crear el script: " + response.data.error);
      }
    } catch (error) {
      toast.error("Error al crear el script: ")
    }
  }
  useEffect(() => {
    return () => {
      toast.dismiss();
    }
  }, [])
  

  return (
    <div className={style.container}>
      <div className={style.containerForm}>
        <div className={style.containerinput}>
          <label htmlFor="nombre">INGRESE NOMBRE:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputValue.name}
            onChange={handlerInputValue}
            className={style.input}
            placeholder="Ingrese nombre del Script..."
          />
        </div>
        <div className={style.containerinput}>
          <label htmlFor="nombre">INGRESE SCRIPT</label>
          <textarea
            id="script"
            name="script"
            value={inputValue.script}
            onChange={handlerInputValue}
            className={style.textTarea}
            placeholder="Ingrese cuerpo del Script..."
          />
        </div>
        <button
          className={style.buttonAddScript}
          onClick={postScriptOnClick}
          disabled={disabledButtonCreate}>Cargar Script
        </button>
      </div>
    </div>
  )
}

export default CreateScript