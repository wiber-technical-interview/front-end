import { useState } from "react"
import style from "./createScript.module.css"
import axios from "axios"


export interface PostScript {
  name: string,
  script: string
}

const CreateScript = () => {


  const [inputValue, setInputValue] = useState<PostScript>({
    name: "",
    script: ""
  })


  const handlerInputValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }


  const postScriptOnClick = async () => {

    let URL = "http://127.0.0.1:8000/createScript"
    try {
      const response = await axios.post(URL, inputValue)
      console.log(response)
      setInputValue({
        name: "",
        script: ""
      })
      response.data === "200" && window.confirm("se cargo perfecto mi rey ")
    } catch (error) {
      console.log(error)
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
        <button className={style.buttonAddScript}
          onClick={postScriptOnClick}>Cargar Script</button>
      </div>
    </div>
  )
}

export default CreateScript