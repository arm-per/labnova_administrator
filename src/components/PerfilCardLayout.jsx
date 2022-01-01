import React from "react";
import "Styles/perfileslayout.scss"

const PerfilCardLayout = ({children}) => {
    return (
        <section className="perfilescontainer">
            {
                children
            }
        </section>
    )
}

export default PerfilCardLayout;
