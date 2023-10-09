import style from "./createScript.module.css"
function CreateScript() {

  return (
    <div className={style.container}>
      <div className={style.containerForm}>
        <div className={style.containerinput}>
          <label htmlFor="nombre">INGRESE NOMBRE:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
           /*  value={""} */
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
            placeholder="Ingrese nombre del Script..."
          />
        </div>
      </div>
    </div>
  )
}

export default CreateScript