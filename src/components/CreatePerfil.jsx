import React, {useState} from "react";
import ReactDOM from "react-dom";
import "Styles/createperfiles.scss";
import {postData} from "Utilities/Dataset";

const createPlace = document.getElementById("create")

const CreatePerfil = ({url, onClick}) => {

    const [lab, setLab] = useState(["text"]);

    const CreateLabHandler = (ev) => {
        ev.preventDefault();
        setLab([...lab, "text"])
    }

    const [data, setData] = useState({
        description: "Para este estudios no se requiere ayuno ni de alguna condición en especial.",
        labs: [

        ]
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

    const createPerfil = () => {
        postData(url, data)
            .then(()=>console.log("Perfil creado"))
            .catch(err => console.error(err))
            .finally(()=> window.location.href = "/perfiles" );
    }

    console.log(data)

    return ReactDOM.createPortal(
        <div className={"blur"}>
            <form className={"createperfil__container"}>
                <div className={"createperfil__header"}>
                    <h3>Crear perfil</h3>
                </div>
                <div className="createperfil__inputcontainer">
                    <span className={"col-2"}>
                        <label htmlFor="name">Nombre del perfil</label>
                        <input type="text" id={"perfilName"}  name="name" placeholder={"nombre del perfil o check up"} onChange={inputDataSet}/>
                    </span>
                    <span className="col-2">
                        <label>Estudios</label>
                        {
                            lab.map((el, index) => <input className="createperfil__labs" key={`formperfiles-lab-${index}`} type="text" name={`${index}`} onChange={labSet} placeholder="Nombre del estudio" id={`perfil-lab-${index}`}/>)
                        }
                        <button className="createperfil__addlab" onClick={CreateLabHandler}>
                            Agregar estudio
                        </button>
                    </span>
                    <span>
                        <label htmlFor="price">Precio del perfil</label>
                        <input type="number" name="price" placeholder={"Precio del perfil/check up"} id="perfilPrice" onChange={inputDataSet}/>
                    </span>
                    <span>
                        <label htmlFor="regularPrice">Precio regular</label>
                        <input type="number" name="regularPrice" placeholder="Precio sin descuento" id="regularPrice" onChange={inputDataSet}/>
                    </span>
                    <span className="col-2">
                        <label htmlFor="description">Condiciones</label>
                        <textarea name="description" id="perfilDescription" placeholder="Condiciones para tomar el estudio. Dejar en blanco si no hay condiciones especiales" onChange={inputDataSet}/>
                    </span>
                    <div className="col-2 createperfil__buttons">
                        <button onClick={onClick}>Cancelar</button>
                        <button onClick={createPerfil}>Crear Perfil</button>
                    </div>
                </div>
            </form>
        </div>, createPlace
    )
}


export default CreatePerfil;



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
