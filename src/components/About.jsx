import React, { useState, useEffect, useCallback } from 'react';
import '../styles/About.css';
import perfil from '../assets/perfil-about.jpg'; 
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const sections = [
  {
    title: "¿Quién soy?",
    content: "Soy Brayan, Científico de Datos y estudiante de Ingeniería en Sistemas apasionado por los datos, la tecnología y el aprendizaje continuo."
  },
  {
    title: "Formación",
    content: "Estudiante de Ingeniería en Sistemas, con formación en ciencia de datos, desarrollo web y tecnologías modernas. Siempre aprendiendo cosas nuevas."
  },
  {
    title: "Habilidades",
    content: "Python, JavaScript, React, Node.js, SQL, Power BI, entre muchas otras herramientas enfocadas en análisis de datos y desarrollo frontend/backend."
  },
  {
    title: "Logros",
    content: "Participación en proyectos académicos, retos técnicos, desarrollo de soluciones web reales, y mejora continua de habilidades técnicas y blandas."
  },
  {
    title: "Aspiraciones",
    content: "Seguir creciendo como profesional en el mundo tech, combinando ciencia de datos con impacto social. Mi meta: aportar con soluciones que mejoren vidas."
  }
];
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
