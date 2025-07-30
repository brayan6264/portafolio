import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          Si deseas ponerte en contacto conmigo, aquí tienes mi información o envíame un mensaje directo:
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-cards">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>brayan6264@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Ubicación</h3>
                <p>Medellín, Colombia</p>
              </div>
            </div>

            <div className="contact-card">
              <FaGithub className="contact-icon" />
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/brayan6264" target="_blank" rel="noopener noreferrer">
                  github.com/brayan6264
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaLinkedin className="contact-icon" />
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/brayan-gomez-backend" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/brayan-gomez-backend
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo" required />
            <textarea placeholder="Escribe tu mensaje..." rows="5" required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

