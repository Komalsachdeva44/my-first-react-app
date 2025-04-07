import React, { useState, useEffect } from 'react';
import './ThemeCustomizer.css';

function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleSidebar = () => setIsOpen(!isOpen);

  const previewTheme = (newTheme) => {
    document.body.className = newTheme;
    setTheme(newTheme);
  };

  const saveTheme = () => {
    localStorage.setItem('theme', theme);
    alert('Theme saved!');
  };

  const resetTheme = () => {
    localStorage.removeItem('theme');
    previewTheme('light');
  };

  useEffect(() => {
    previewTheme(theme);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <div className="theme-toggler" onClick={toggleSidebar}>
        <div className="shinchan-icon">
          {/* Shinchan-inspired SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="40"
            height="40"
            fill="none"
          >
            <circle cx="32" cy="32" r="30" fill="#FFD93D" stroke="#F4C534" strokeWidth="4" />
            <circle cx="24" cy="26" r="4" fill="#3E3E3E" />
            <circle cx="40" cy="26" r="4" fill="#3E3E3E" />
            <path
              d="M22 40c2 2 6 4 10 4s8-2 10-4"
              stroke="#3E3E3E"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M18 18c2-2 6-4 10-4s8 2 10 4"
              stroke="#3E3E3E"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className={`theme-sidebar ${isOpen ? 'open' : ''}`}>
        <h3>Choose Your Theme</h3>

        <div className="theme-card-options">
          <div className={`theme-card light ${theme === 'light' ? 'selected' : ''}`} onClick={() => previewTheme('light')}>
            <div className="theme-preview light"></div>
            <span>Light Mode</span>
          </div>

          <div className={`theme-card dark ${theme === 'dark' ? 'selected' : ''}`} onClick={() => previewTheme('dark')}>
            <div className="theme-preview dark"></div>
            <span>Dark Mode</span>
          </div>

          <div className={`theme-card pink ${theme === 'pink' ? 'selected' : ''}`} onClick={() => previewTheme('pink')}>
            <div className="theme-preview pink"></div>
            <span>Pink Mode</span>
          </div>
        </div>

        <div className="theme-actions">
          <button onClick={saveTheme}>Save</button>
          <button onClick={resetTheme}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default ThemeCustomizer;
