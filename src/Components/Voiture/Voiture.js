import React, { useState} from "react";
import css from '../Voiture/Voiture.module.css'
import styledComponent from 'styled-components'


function Voiture(props){

    const [afficheCompleteCaracterique, setAficheCompleteCaracterique] = useState(false);
    
    const showCompleteCarateristique = () => {
        setAficheCompleteCaracterique(!afficheCompleteCaracterique)
    }

    const Voiture = styledComponent.div`
    background-color: grey;
    cursor: pointer;
    margin: 0 10px;
    padding: 5px 0;
    text-align: center;
    color: white;
    border-radius: 10px;
    height: ${afficheCompleteCaracterique ? '290px':'180px'};
    width: 250px;
    `;

    return (
        <Voiture className={css.voiture} onClick={() => showCompleteCarateristique()}>
            <p>Nom: {props.nom}</p>
            <p>Marque: {props.marque}</p>
            <p>Modele : {props.modele}</p>
            <p>Km: {props.km}</p>
            <p>Couleur: {props.couleur}</p>
            <p>Carburant : {props.carburant}</p>
            {props.isLocation === true ? 
                <p>A louer</p> : null
            }
            {afficheCompleteCaracterique ?
                <div>
                    <p>Annee : {props.annee}</p>
                    <p>Vitesse : {props.vitesse}</p>
                    <p>Cv Fiscaux{props.cvfiscaux}</p>
                    <p>Nombre Porte{props.porte}</p>
                </div>   
                : null
            }
        </Voiture>
    )
}

export default Voiture;