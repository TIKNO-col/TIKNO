import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.inicio, path: '/' },
    { name: t.nav.proyectos, path: '/proyectos' },
    { name: t.nav.precios, path: '/precios' },
    { name: t.nav.equipo, path: '/equipo' },
    { name: t.nav.contacto, path: '/contacto' },
  ];

  return (
    <header className="header" style={{ 
      background: 'rgba(5, 5, 5, 0.8)', 
      backdropFilter: 'blur(20px)', 
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '15px 0'
    }}>
      <nav className="nav" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              background: 'linear-gradient(135deg, #BC5FD9, #FFF)',
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': 'transparent',
              margin: 0,
              fontSize: '1.8rem',
              fontWeight: 800,
              letterSpacing: '-1px'
            }}
          >
            TIKNO
          </motion.h2>
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`} style={{ gap: '30px' }}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  color: location.pathname === link.path ? '#BC5FD9' : '#FFF',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  opacity: location.pathname === link.path ? 1 : 0.7,
                  transition: '0.3s'
                }}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          <li className="language-switcher">
            <button 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <span className="lang-separator">|</span>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </li>
        </ul>
        
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span style={{ backgroundColor: 'var(--color-lila-bright)' }}></span>
          <span style={{ backgroundColor: 'var(--color-lila-bright)' }}></span>
          <span style={{ backgroundColor: 'var(--color-lila-bright)' }}></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
