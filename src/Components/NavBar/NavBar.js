import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavBar.module.css'

function NavBar(){
    return(
        <div>
            <ul className={css.container}>
                <li>
                    <NavLink className={css.link1} to={'/'}>Acceuil</NavLink>
                </li>

                <li>
                    <NavLink className={css.link2} to={'/louer'}>Véhicules à loues</NavLink>
                </li>
                <li>
                    <NavLink className={css.link3} to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar