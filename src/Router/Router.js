import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceuil from '../Pages/Accueil/Acceuil';
import NavBar from '../Components/NavBar/NavBar';

function Router(){
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Acceuil/>}/>
            </Routes>
        </div>
    )
}

export default Router;