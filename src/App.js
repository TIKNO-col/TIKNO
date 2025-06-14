import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'EcoTech Solutions',
      description: 'Plataforma sostenible para gestión ambiental',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'CloudNine Dashboard',
      description: 'Panel de administración empresarial avanzado',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'PixelCraft Studio',
      description: 'Portfolio creativo para diseñadores digitales',
      tech: ['React', 'Three.js', 'Firebase'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'DataFlow Analytics',
      description: 'Herramienta de análisis de datos en tiempo real',
      tech: ['Angular', 'Python', 'Redis'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'MindBridge Connect',
      description: 'Red social profesional para desarrolladores',
      tech: ['React Native', 'GraphQL', 'AWS'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'TechVault Security',
      description: 'Plataforma de seguridad cibernética empresarial',
      tech: ['Next.js', 'Blockchain', 'Docker'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  const texts = {
    es: {
      nav: ['Inicio', 'Proyectos', 'Acerca', 'Contacto'],
      hero: {
        title: 'Sitios Web Desarrollados Destacados',
        subtitle: 'Creando experiencias digitales excepcionales con tecnologías modernas'
      },
      buttons: ['Precios', 'Equipo', 'Contáctanos'],
      footer: 'Todos los derechos reservados'
    },
    en: {
      nav: ['Home', 'Projects', 'About', 'Contact'],
      hero: {
        title: 'Featured Developed Websites',
        subtitle: 'Creating exceptional digital experiences with modern technologies'
      },
      buttons: ['Pricing', 'Team', 'Contact Us'],
      footer: 'All rights reserved'
    }
  };

  useEffect(() => {
    // Loading animation
    setTimeout(() => {
      setIsLoading(false);
      
      // Page entrance animations
      anime({
        targets: '.header',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.hero-content',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: 300,
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.project-card',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100, {start: 600}),
        easing: 'easeOutExpo'
      });

      anime({
        targets: '.bottom-nav',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 1000,
        easing: 'easeOutExpo'
      });
    }, 1500);

    // Typewriter effect
    const typewriterEffect = () => {
      const text = texts[currentLanguage].hero.title;
      const element = document.querySelector('.typewriter');
      if (element) {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(timer);
          }
        }, 50);
      }
    };

    if (!isLoading) {
      setTimeout(typewriterEffect, 800);
    }
  }, [isLoading, currentLanguage]);

  const handleCardHover = (e, isEntering) => {
    const card = e.currentTarget;
    
    if (isEntering) {
      anime({
        targets: card,
        scale: 1.05,
        rotateY: 10,
        translateZ: 50,
        duration: 300,
        easing: 'easeOutQuad'
      });
    } else {
      anime({
        targets: card,
        scale: 1,
        rotateY: 0,
        translateZ: 0,
        duration: 300,
        easing: 'easeOutQuad'
      });
    }
  };

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    
    anime({
      targets: card,
      rotateY: '+=180',
      duration: 600,
      easing: 'easeInOutQuad'
    });
  };

  const handleButtonHover = (e, isEntering) => {
    const button = e.currentTarget;
    
    if (isEntering) {
      anime({
        targets: button,
        scale: 1.1,
        backgroundColor: '#00ff88',
        color: '#0a0a0a',
        duration: 200,
        easing: 'easeOutQuad'
      });
    } else {
      anime({
        targets: button,
        scale: 1,
        backgroundColor: 'transparent',
        color: '#ffffff',
        duration: 200,
        easing: 'easeOutQuad'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">NicoRGhost</div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">NicoRGhost</div>
        <nav className="nav">
          {texts[currentLanguage].nav.map((item, index) => (
            <a key={index} href="#" className="nav-item">{item}</a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="typewriter"></span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">{texts[currentLanguage].hero.subtitle}</p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="portfolio">
        <div className="portfolio-container">
          <div className="cards-stack">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  background: project.gradient,
                  transform: `translateZ(${index * -20}px) rotateY(${index * 2}deg)`,
                  zIndex: projects.length - index
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
                onClick={handleCardClick}
              >
                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="card-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button className="card-button">Ver Proyecto</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="bottom-nav">
        <div className="nav-buttons">
          {texts[currentLanguage].buttons.map((button, index) => (
            <button
              key={index}
              className="nav-button"
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              {button}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="language-selector">
            <button
              className={currentLanguage === 'es' ? 'active' : ''}
              onClick={() => setCurrentLanguage('es')}
            >
              Español
            </button>
            <button
              className={currentLanguage === 'en' ? 'active' : ''}
              onClick={() => setCurrentLanguage('en')}
            >
              English
            </button>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
          <p className="copyright">© 2024 NicoRGhost. {texts[currentLanguage].footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;