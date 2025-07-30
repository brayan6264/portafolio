import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/profile.png'; // Asegúrate de tener esta imagen

function Hero() {
    return (
    <section className="hero" id="hero">
        <div className="hero-content">
        <div className="hero-text">
            <h1>¡Hola! Soy Brayan</h1>
            <h2>Científico de Datos & Estudiante de Ingeniería en Sistemas</h2>
            <p>Apasionado por los datos, la tecnología y el aprendizaje continuo.</p>
            <div className="hero-buttons">
            <a href="/projects" className="btn-primary">Ver proyectos</a>
            <a href="/contact" className="btn-secondary">Contáctame</a>
            </div>
        </div>
        <div className="hero-image">
            <img src={profileImage} alt="Foto de Brayan" />
        </div>
        </div>
    </section>
    );
}

export default Hero;