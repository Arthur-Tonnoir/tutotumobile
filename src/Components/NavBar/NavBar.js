import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavBar.module.css'

function NavBar(){
    return(
        <div>
            <ul className={css.container}>
                <li>
                    <NavLink className={css.link} to={'/'}>Acceuil</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar