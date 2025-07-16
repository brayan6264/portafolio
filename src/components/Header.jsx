import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
        <div className="container">
            <h1 className="logo">Brayan</h1>
            <nav className="nav">
            <ul className="nav-links">
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#portfolio">Proyectos</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;