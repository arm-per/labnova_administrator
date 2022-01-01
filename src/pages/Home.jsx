import React, {useState, useEffect} from "react";
import TopBar from "Components/TopBar";
import ListContainer from "Components/ListContainer";
import ListElement from "Components/ListElement";
import CreateLab from "Components/CreateLab";
import { API } from "Utilities/common";
import { getData } from "Utilities/Dataset";

const Home = ( ) => {

    const [creator, setCreator] = useState(false);
    const [data, setData] = useState([])
    const [filtered, setFilter] = useState([])
    const APIUrl = `${API}labs/`;

    const Paginated = `${API}labs`;

    const creatorHandler = (ev) => {
        ev.preventDefault()
        setCreator(!creator)
    }


    useEffect(()=>{
        getData(Paginated)
            .then(res => {setData(res.data); setFilter(res.data)})
            .catch(err => console.log(err))
            .finally(()=> console.log("Data cargada"))

            console.log(filtered)

    }, [setFilter])


    return (
        <section>
            <TopBar section={"cotizador"} type={"estudio"} action={creatorHandler} data={data} search={setFilter}/>
            <ListContainer>
                {
                    filtered.length > 0 ? filtered.map(lab => <ListElement
                        name={lab.name}
                        url={APIUrl}
                        price={lab.price}
                        desc={lab.description}
                        key={`lab-${lab.id}`}
                        id={lab.id}/>
                        ): "No se encontró ningún elemento"
                }
            </ListContainer>
            { creator && <CreateLab
                url={APIUrl}
                onClick={creatorHandler}
                />}

        </section>
    )
}

export default Home;
