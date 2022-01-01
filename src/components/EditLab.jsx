import React, {useState} from "react";
import ReactDOM from "react-dom";
import "Styles/createlab.scss";
import {updateData} from "Utilities/Dataset";

const createPlace = document.getElementById("create")

const EditLab = ( {onClick, url, id, name, description, price} ) => {

    const [data, setData] = useState({
        name: name,
        description: description,
        price: price
    })

    console.log(id)

    const dataHandler = ({currentTarget}) => {
        setData({
            ...data,
            [currentTarget.name]: currentTarget.value,
        })
    }

   const editElement = (ev) => {
        ev.preventDefault();
        updateData(url, id, data).then(res => console.log(res)).catch(err => console.error(err)).finally(()=> window.location.href = "/");
   }


    return ReactDOM.createPortal(
        <div className="blur">
            <div className="createlab-container">
                <div className={"createlab-header"}>
                    <h3>Editar estudio <span>{name}</span></h3>
                </div>
                <form className={"createlab-form"}>
                    <span>
                        <label htmlFor="name">Nombre del estudio</label>
                        <input type="text" placeholder="Nombre del estudio" name="name" id="name" value={data.name} onChange={dataHandler}/>
                    </span>
                    <span>
                        <label htmlFor="price">Costo</label>
                        <input type="number" placeholder="Precio" name="price" id="price" value={data.price} onChange={dataHandler}/>
                    </span>
                    <span className="span-2">
                        <label htmlFor="description">Indicaciones</label>
                        <textarea placeholder="Deje este campo en blanco si no hay una indicación específica" name="description" id="description" value={data.description} onChange={dataHandler}/>
                    </span>
                    <div>
                        <button onClick={onClick}>Descartar</button>
                        <button onClick={editElement} disabled={false}>Confirmar edición</button>
                    </div>

                </form>
            </div>
        </div>
    , createPlace)

}

export default EditLab;
