import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    closeMenu();
  };

  return (
    <>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="logo">Komal ⚡</div>

        <div className={`sidebar ${isMenuOpen ? 'show' : ''}`}>
          <ul className="sidebar-links">
            <li>
              <a 
                href="#home" 
                className={activeLink === '#home' ? 'active' : ''}
                onClick={() => handleLinkClick('#home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeLink === '#projects' ? 'active' : ''}
                onClick={() => handleLinkClick('#projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeLink === '#about' ? 'active' : ''}
                onClick={() => handleLinkClick('#about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeLink === '#contact' ? 'active' : ''}
                onClick={() => handleLinkClick('#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </>
  );
}

export default Header;
