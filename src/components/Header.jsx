import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
    // if false the make it true if true than make it false 
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // by default false 
  };

  return (
    <>
      {/* Backdrop when sidebar is open */}
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <nav className="navbar">
        <div className="logo">Komal ⚡</div>

        {/* Sidebar (shows links for both mobile & desktop) */}
        <div className={`sidebar ${isMenuOpen ? 'show' : ''}`}>
          <ul className="sidebar-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>

        {/* Hamburger icon (visible only on mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </>
  );
}

export default Header;
