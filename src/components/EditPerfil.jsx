import React, {useState} from "react";
import ReactDOM from "react-dom";
import "Styles/createperfiles.scss";
import {updateData} from "Utilities/Dataset";

const createPlace = document.getElementById("create")

const EditPerfil = ({url, onClick, id,  elements}) => {


    const [data, setData] = useState({
        description: elements.description,
        labs: elements.labs,
        name: elements.name,
        price: elements.price,
        regularPrice: elements.regularPrice,
    })

    const inputDataSet = ({currentTarget})  => {
        setData({...data,
            [currentTarget.name]: currentTarget.value,
        })
    }

    const labSet = ({currentTarget}) => {
        const {labs} = data;
        const number = parseInt(currentTarget.name)
        labs[number] = currentTarget.value;
    }

    const editPerfil = (ev) => {
        ev.preventDefault();
        updateData(url, id, data).catch(err => console.log(err)).finally(()=> window.location.href = "/perfiles/")
    }

    console.log(elements)

    console.log(data)

    return ReactDOM.createPortal(
        <div className={"blur"}>
            <div className={"createperfil__container"} >
                <div className={"createperfil__header"}>
                    <h3>Editar {elements.name}</h3>
                </div>
                <div className="createperfil__inputcontainer">
                    <span className={"col-2"}>
                        <label htmlFor="name">Nombre del perfil</label>
                        <input
                            type="text"
                            id={"perfilName"}
                            name="name"
                            value={data.name}
                            placeholder={"nombre del perfil o check up"}
                            onChange={inputDataSet}
                        />
                    </span>
                    <span className="col-2">
                        <label>Estudios</label>
                        {
                            data.labs.map((el, index) => {
                                return (
                                    <div key={`formperfiles-lab-${index}`} className="editperfil__labs">
                                        <input
                                            className="createperfil__labs"
                                            type="text"
                                            name={`${index}`}
                                            onChange={labSet}
                                            placeholder="Nombre del estudio"
                                            value={data.labs[index]}
                                            id={`perfil-lab-${index}`}
                                            disabled={true}
                                        />
                                </div>
                                )
                            }
                            )
                        }
                    </span>
                    <span>
                        <label htmlFor="price">Precio del perfil</label>
                        <input
                            type="number"
                            name="price"
                            value={data.price}
                            placeholder={"Precio del perfil/check up"}
                            id="perfilPrice"
                            onChange={inputDataSet}
                        />
                    </span>
                    <span>
                        <label htmlFor="regularPrice">Precio regular</label>
                        <input
                            type="number"
                            value={data.regularPrice}
                            name="regularPrice"
                            placeholder="Precio sin descuento"
                            id="regularPrice"
                            onChange={inputDataSet}
                        />
                    </span>
                    <span className="col-2">
                        <label htmlFor="description">Condiciones</label>
                        <textarea
                            value={data.description}
                            name="description"
                            id="perfilDescription"
                            placeholder="Condiciones para tomar el estudio. Dejar en blanco si no hay condiciones especiales"
                            onChange={inputDataSet}
                        />
                    </span>
                    <div className="col-2 createperfil__buttons">
                        <button onClick={onClick}>Descartar</button>
                        <button onClick={editPerfil}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>, createPlace
    )
}


export default EditPerfil;



/*

"id": 4,
    "labs": [
    "Química de 44 elementos",
    "Análisis de orina",
    "Análisis no sé qué"
],
    "name": "PERFIL TIROIDEO",
    "price": 3000,
    "regularPrice": 4000,
    "description": "No haber consumido alimentos"
},

 */
