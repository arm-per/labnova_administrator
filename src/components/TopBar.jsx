import React, {useState} from "react";
import "Styles/topbar.scss";
import add from "Assets/add.svg";

const TopBar = ({section, type, action, search, data}) => {

    const searchHandler = ({target: {value}}) => {
        search(
            data.filter(item => item.name.toUpperCase().includes(value.toUpperCase()))
        )
    }

    return (
        <header className="top-bar__container">
            <div>
                <h1 className="top-bar__title"><span>ADMINISTRADOR </span>{section}</h1>
            </div>
            <div className={"top-bar__interactions"}>
                <div className="top-bar__search-container"><input type="search" onChange={searchHandler} placeholder={"Escriba sus términos de búsqueda"} className="top-bar__search"/></div>
                <button className="top-bar__action" onClick={action}>
                    Agregar {type} <img src={add} alt="agregar" className={"top-bar__add"}/>
                </button>
            </div>
        </header>
    )
}

export default TopBar;
