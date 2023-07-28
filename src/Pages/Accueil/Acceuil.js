import React, { useState } from 'react';
import Voiture from '../../Components/Voiture/Voiture'

import css from './Accueil.module.css'

function Acceuil(){

    const [vehicules, setVehicules] = useState(
    [
        {
            id:1,
            nom:"teste1",
            marque:"Citroen",
            modele:"2",
            km:2563,
            couleur:"red",
            carburant:"Diesel",
            isLocation:false,
            annee:2003,
            vitesse:"automatique",
            cvfiscaux:0,
            porte:3
        },
        {
            id:1,
            nom:"teste2",
            marque:"Citroen",
            modele:"2",
            km:110000,
            couleur:"vert",
            carburant:"Essence",
            isLocation:true,
            annee:2003,
            vitesse:"manuelle",
            cvfiscaux:0,
            porte:3
        },
        {
            id:3,
            nom:"teste3",
            marque:"Citroen",
            modele:"3",
            km:2486,
            couleur:"red",
            carburant:"Electrique",
            isLocation:false,
            annee:2003,
            vitesse:"automatique",
            cvfiscaux:0,
            porte:3
        }
    ])

    let voiture = vehicules.map((vehicule, index) => {
        return (
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
        );
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