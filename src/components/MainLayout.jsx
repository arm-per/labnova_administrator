import React, {useState} from "react";
import mainLogo from "Assets/logo.svg";
import cotizador from "Assets/cotizator_icon.svg";
import location from "Assets/locations_icon.svg";
import perfiles from "Assets/perfiles_icon.svg";
import arrow from "Assets/arrow.svg"
import {Link} from "react-router-dom";
import "Styles/navbar.scss";



const MainLayout = (props) => {

    const [expand, setExpand] = useState(false);

    const expandHandler = () => {
        setExpand(!expand)
    }

    return (
        <main className={"layout"}>
            <aside className={`nav_container ${expand ? "expanded" : undefined}`}>
                <button className={"expand"} onClick={expandHandler}>
                    <img src={arrow} alt="" className={`expand_img ${expand && "less"}`}/>
                </button>
                <nav className={"navbar"}>
                    <div className={"main_logo_container"}>
                        <img src={mainLogo} alt="" className={"main_logo"}/>
                    </div>
                    <Link to={"/"} className={"nav_link"}>
                        <img src={cotizador} alt="" className={"nav_icon"}/> <span className={!expand? "hide": undefined}>Cotizador</span>
                    </Link>
                    <Link to={"/perfiles"} className={"nav_link"}>
                        <img src={perfiles} alt="" className={"nav_icon"}/> <span className={!expand? "hide": undefined}>Perfiles</span>
                    </Link>
                    {/*<Link to={"/ubicaciones"} className={"nav_link"}>
                        <img src={location} alt="" className={"nav_icon"}/> <span className={!expand? "hide": undefined}>Ubicaciones</span>
                    </Link>*/}
                </nav>
            </aside>
            <section>
                {
                    props.children
                }
            </section>
        </main>
    )
}

export default MainLayout;
