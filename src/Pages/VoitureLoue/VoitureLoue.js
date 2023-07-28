import React, { useState } from 'react';

import vechiules from '../../data';
import Voiture from '../../Components/Voiture/Voiture';

import css from './VoitureLoue.module.css'

function VoitureLoue(){

    const [vehicules, setVehicules] = useState(vechiules)
    let voiture = vehicules.map((vehicule, index) => {
        if(vehicule.isLocation === true)
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
        )}else{return null}
    })
    return (
        <div>
            {!voiture ? "Aucun véhicule disponible " : voiture}
        </div>
    )
}

export default VoitureLoue;