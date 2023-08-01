import React, { useState } from 'react';
import Voiture from '../../Components/Voiture/Voiture';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import css from './Accueil.module.css'

import vechiules from '../../data';
import { Carousel } from 'react-responsive-carousel';

function Acceuil(){

    const [vehicules, setVehicules] = useState(vechiules);

    return (
        <div className={css.main}>
            
            <h1 className={css.title}>Bienvenue sur tututomobile</h1>
            <Carousel showArrows={true} autoPlay className={css.carouselVoiture}>
                
                {vehicules.map((vehicule,index) => (
                    <div key={vehicule.id}>
                        <img alt={vehicule.nom} src={vehicule.imageSrc} className='slide.image'/>
                        <Voiture className='overlay'
            key={vehicule.id}
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
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Acceuil;