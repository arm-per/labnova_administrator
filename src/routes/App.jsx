import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "Components/MainLayout";
import Home from "Pages/Home";
import Perfiles from "Pages/Perfiles";
import Locations from "Pages/Locations";


const App = () => {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/perfiles" element={<Perfiles/>}/>
                    {/*<Route path="/ubicaciones" element={<Locations/>}/>*/}
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default App;
