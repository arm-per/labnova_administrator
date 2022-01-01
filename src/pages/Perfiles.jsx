import React, {useEffect, useState} from "react";
import TopBar from "Components/TopBar";
import PerfilCardLayout from "Components/PerfilCardLayout";
import PerfilCard from "Components/PerfilCard";
import {getData} from "Utilities/Dataset";
import {API} from "Utilities/common";
import CreatePerfil from "Components/CreatePerfil";

const Perfiles = ( ) => {

    const [create, setCreate] = useState(false);
    const [perfiles, setPerfiles] = useState([]);
    const [filtered, setFilter] = useState([])
    const url = `${API}/perfiles/`;

    const createHandler = (ev) => {
        ev.preventDefault();
        setCreate(!create)
    }

    useEffect(()=> {
        getData(url)
            .then(res => {
            setPerfiles(res.data);
            setFilter(res.data)})
            .catch(err => console.error(err));
    }, [setFilter])

    return (
        <section>
            <TopBar
                section={"perfiles"}
                type={"perfil"}
                action={createHandler}
                data={perfiles}
                search={setFilter}
            />
            <PerfilCardLayout>
                {
                    filtered.length > 0 ? filtered.map(el =>(
                        <PerfilCard
                            price={el.price}
                            element={el}
                            name={el.name}
                            regularPrice={el.regularPrice}
                            estudios={el.labs} id={el.id}
                            url={url}
                            key={`perfil-${el.id}`}
                        />))
                        :"No se encontró ningún elemento"
                }
            </PerfilCardLayout>
            {
                create && <CreatePerfil url={url} onClick={createHandler}/>
            }
        </section>
    )
}

export default Perfiles;
