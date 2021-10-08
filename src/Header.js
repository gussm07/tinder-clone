import React from 'react';
import "./Header.css";
import PersonIcon from "@material-ui/icons/AccountCircle"/* IMPORTA ICONO DE PERFIL */
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
           
            <IconButton>{/* CONVIERTE EL ICONO EN UN BOTON */}
                <PersonIcon fontSize="large" className="header_icon"/>
                     
            </IconButton>
            {/* COLOCA EL ICONO CON FORMATO EN CSS */}
            <img
                className="header__logo"
                src="https://cdn131.picsart.com/275291797028211.png?type=webp&to=min&r=640"
                alt=""
            />
            {/* COLOCA EL BOTON DE LA IZQUIERDA CON FORMATO EN CSS */}
            <IconButton >
                <ForumIcon fontSize="large" className="header__icon"/> 
            </IconButton>
   
                   
        </div>
    )
}

export default Header
