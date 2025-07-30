import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
        <div className="container">
            <h1 className="logo">BG</h1>
            <nav className="nav">
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre mí</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;