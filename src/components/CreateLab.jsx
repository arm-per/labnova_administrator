import React, {useState} from "react";
import ReactDOM from "react-dom";
import "Styles/createlab.scss";
import {postData} from "Utilities/Dataset";

const createPlace = document.getElementById("create")

const CreateLab = ( {onClick, url} ) => {

    const [data, setData] = useState({
        description: "Para este estudios no se requiere ayuno ni de alguna condición en especial."
    })

    const dataHandler = ({currentTarget}) => {
        setData({
            ...data,
            [currentTarget.name]: currentTarget.value,
        })
    }

   const createElement = (ev) => {
        ev.preventDefault();
        postData(url, data).then(res => console.log(res)).catch(err => console.error(err)).finally(()=> window.location.href = "/");
   }


    return ReactDOM.createPortal(
        <div className="blur">
            <div className="createlab-container">
                <div className={"createlab-header"}>
                    <h3>Crear estudio</h3>
                </div>
                <form className={"createlab-form"}>
                    <span>
                        <label htmlFor="name">Nombre del estudio</label>
                        <input type="text" placeholder="Nombre del estudio" name="name" id="name" onChange={dataHandler}/>
                    </span>
                    <span>
                        <label htmlFor="price">Costo</label>
                        <input type="number" placeholder="Precio" name="price" id="price" onChange={dataHandler}/>
                    </span>
                    <span className="span-2">
                        <label htmlFor="description">Indicaciones</label>
                        <textarea placeholder="Deje este campo en blanco si no hay una indicación específica" name="description" id="description" onChange={dataHandler}/>
                    </span>
                    <div>
                        <button onClick={onClick}>Cancelar</button>
                        <button onClick={createElement} disabled={false}>Crear estudio</button>
                    </div>

                </form>
            </div>
        </div>
    , createPlace)

}

export default CreateLab;
