import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceuil from '../Pages/Accueil/Acceuil';
import NavBar from '../Components/NavBar/NavBar';
import VoitureLoue from '../Pages/VoitureLoue/VoitureLoue';
import Contact from '../Pages/Contact/Contact';

function Router(){
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Acceuil/>}/>
                <Route path='/louer' element={<VoitureLoue/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default Router;