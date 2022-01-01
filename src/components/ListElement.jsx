import React, {useState} from "react";
import "Styles/listelement.scss";
import edit from "Assets/edit.svg";
import erase from "Assets/delete.svg"
import ModalConfirmDestroy from "Components/ModalConfirmDestroy";
import EditLab from "Components/EditLab";

const ListElement = ({ name, desc, price, id, url}) => {

    const [confirmation, setConfirmation] = useState(false);
    const [toedit, setEdit] = useState(false)


    const toggleDestroy = () => {
        setConfirmation(!confirmation);
    }


    return (<>
        <div className="listelement-container">
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{desc}</p>
            </div>
            <div>
                <p>${price}</p>
            </div>
            <div className={"listelement__buttons"}>
                <button title="Editar" className={"listelement__edit"} onClick={()=> setEdit(!toedit)}><img src={edit} alt=""/></button>
                <button className={"listelement__delete"} title="Eliminar" onClick={toggleDestroy}><img src={erase} alt=""/></button>
            </div>
        </div>
        {
            confirmation && <ModalConfirmDestroy url={url} name={name} id={id} onClick={toggleDestroy} />
        }
        {
              toedit &&  <EditLab
                name={name}
                description={desc}
                price={price}
                id={id}
                url={url}
                onClick={()=>setEdit(!toedit)}
                />
        }
        </>
    )

}

export default ListElement;
