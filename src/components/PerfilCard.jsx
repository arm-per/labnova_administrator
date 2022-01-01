import React, {useState} from "react";
import "Styles/perfilescard.scss";
import editar from "Assets/edit.svg";
import eliminar from "Assets/delete.svg";
import ModalConfirmDestroy from "Components/ModalConfirmDestroy";
import EditPerfil from "Components/EditPerfil";

const PerfilCard = ({name, estudios, edit, price, regularPrice, url, id, element}) => {

    const [destroy, setDestroy] = useState(false);

    const destroyHandler = (ev) => {
        ev.preventDefault();
        setDestroy(!destroy)
    }

    const [toedit, setEdit] = useState(false);

    const EditHandler = (ev) => {
        ev.preventDefault();
        setEdit(!toedit)
    }

    return (
        <article className="perfilcontainer">
            <div className="perfil__head">
                <h2>{name? name: "Check up femenino"}</h2>
            </div>
            <div>
                <ul className={"perfil__estudios"}>
                    {
                        estudios && estudios.map((el, i) =>{
                            return <li key={`lab_${i}`}>{el}</li>
                        } )
                    }
                </ul>
            </div>
            <div className="perfil__price">
                <p>Precio</p>
                <p>${price?price:2000}</p>
                <p>Precio sin descuento</p>
                <p>${regularPrice}</p>
            </div>
            <div className="perfil__buttons">
                <button title="Editar" onClick={EditHandler} className="perfil__edit">
                    <img src={editar} alt=""/>
                </button>
                <button title="Eliminar" onClick={destroyHandler} className="perfil__destroy">
                    <img src={eliminar} alt=""/>
                </button>
            </div>
            {
                destroy && <ModalConfirmDestroy name={name} id={id} onClick={destroyHandler} url={url} location="/perfiles/"/>
            }
            {
                toedit && <EditPerfil url={url} id={id} onClick={EditHandler} elements={element}/>
            }
        </article>
    )
}

export default PerfilCard;
