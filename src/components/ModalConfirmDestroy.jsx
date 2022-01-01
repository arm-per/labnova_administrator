import React from "react";
import ReactDOM from "react-dom";
import "Styles/modal.scss"
import {destroyHandler} from "Utilities/common";

const create = document.getElementById("create")

const ModalConfirmDestroy = ({name, onClick, id, url, location}) => {

    return ReactDOM.createPortal(
        <div className={"modal__background"}>
            <div className={"modal__container"}>
                <div className={"modal__header"}>
                    <h3>¿Esta seguro que desea eliminar <span>{name}</span>?</h3>
                </div>
                <div className={"modal__actions"}>
                    <button onClick={onClick} className={"modal__button--cancel"}>Cancelar</button>
                    <button onClick={()=> destroyHandler(url, id, location)} className={"modal__button--accept"}>Aceptar</button>
                </div>
            </div>
        </div>, create)

}

export default ModalConfirmDestroy;
