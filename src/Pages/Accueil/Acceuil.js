import React, { useState } from 'react';
import Voiture from '../../Components/Voiture/Voiture'

import css from './Accueil.module.css'

import vechiules from '../../data';

function Acceuil(){

    const [vehicules, setVehicules] = useState(vechiules)

    let voiture = vehicules.map((vehicule, index) => {
        if(vehicule.isLocation === false)
        {return (
            <Voiture
            key={index}
            nom={vehicule.nom}
            marque={vehicule.marque}
            modele={vehicule.modele}
            km={vehicule.km}
            couleur={vehicule.couleur}
            carburant={vehicule.carburant}
            isLocation={vehicule.isLocation}
            annee={vehicule.annee}
            vitesse={vehicule.vitesse}
            cvfiscaux={vehicule.cvfiscaux}
            porte={vehicule.porte}
            />
        );}else{
            return null
        }
    })

    return (
        <div className={css.main}>
            <h1 className={css.title}>Bienvenue sur tututomobile</h1>
            <div className={css.voitures}>
                {voiture}
            </div>
        </div>
    )
}

export default Acceuil;