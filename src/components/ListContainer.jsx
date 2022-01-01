import React from "react";
import "Styles/listcontainer.scss";

const ListContainer = ({children}) => {
    return (
        <div className="listcontainer">
            {
                children
            }
        </div>
    )
}

export default ListContainer;
