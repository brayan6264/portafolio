import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

const closeMenu = () => {
    setMenuOpen(false);
};

return (
    <header className="header">
      <div className="container">
        <h1 className="logo">BG</h1>
        <nav className="nav">
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Sobre mí
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>
                Proyectos
              </Link>
            </li>
            <li>
                <Link to="/contact" onClick={closeMenu}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
