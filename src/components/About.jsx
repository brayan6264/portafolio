import React, { useState, useEffect, useCallback } from 'react';
import '../styles/About.css';
import perfil from '../assets/perfil-about.jpg'; 
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import sections from '../data/Sections'; // Asegúrate de que la ruta sea correcta

function About() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSection = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection((prev) => prev + direction);
      setIsTransitioning(false);
    }, 300);
  };

  const handleScroll = useCallback((e) => {
    if (isTransitioning) return;

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      changeSection(1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      changeSection(-1);
    }
  }, [currentSection, isTransitioning]); // 👈 dependencias correctas

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]); // ✅ sin warnings

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={perfil} alt="Foto de Brayan" />
        </div>

        <div className="about-card-wrapper">
          {currentSection > 0 && (
            <button
              className="arrow arrow-up"
              onClick={() => changeSection(-1)}
            >
              <FaChevronUp />
            </button>
          )}

          <div className={`about-card ${isTransitioning ? 'fade' : ''}`}>
            <h2>{sections[currentSection].title}</h2>
            <p>{sections[currentSection].content}</p>
          </div>

          {currentSection < sections.length - 1 && (
            <button
              className="arrow arrow-down"
              onClick={() => changeSection(1)}
            >
              <FaChevronDown />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
