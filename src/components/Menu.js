import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/js/dist/collapse' 
import 'bootstrap/js/dist/offcanvas' 
import 'bootstrap/js/dist/dropdown'


class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to ="/"><img src="./logo1.png" width="70" /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/PageInicio">Inicio</Link>
                            <Link className="nav-link" to="/PageSesion">Iniciar Sesion</Link>
                            <Link className="nav-link" to="/PageUsuarios">Usuarios</Link>
                            <Link className="nav-link" to="/PageEventos">Eventos</Link>
                            <Link className="nav-link" to="/PageDeportes">Deportes</Link>
                            <Link className="nav-link" to="/PageEquipos">Equipos</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;