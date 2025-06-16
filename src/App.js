import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const pricingRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      year: "2024",
      category: "Web Development",
      description: "Plataforma de comercio electrónico completa con sistema de pagos integrado, gestión de inventario en tiempo real, panel de administración avanzado y experiencia de usuario optimizada para conversiones.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT"],
      status: "Completado",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      year: "2024",
      category: "Mobile App",
      description: "Aplicación móvil para gestión de tareas y proyectos con colaboración en tiempo real, notificaciones push, sincronización offline y análisis de productividad personal.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo", "AsyncStorage"],
      status: "En Progreso",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "AI Chat Bot",
      year: "2023",
      category: "AI/ML",
      description: "Bot conversacional inteligente con procesamiento de lenguaje natural, integración con múltiples plataformas de mensajería y capacidades de aprendizaje automático.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "OpenAI", "WebSocket", "Docker"],
      status: "Beta",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Portfolio Website",
      year: "2023",
      category: "Web Design",
      description: "Sitio web de portafolio personal con diseño responsivo, animaciones suaves, optimización SEO y sistema de gestión de contenido personalizado.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack", "Sass", "PWA"],
      status: "Completado",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      year: "2023",
      category: "Data Science",
      description: "Dashboard interactivo para análisis de datos empresariales con visualizaciones en tiempo real, reportes automatizados y integración con múltiples fuentes de datos.",
      technologies: ["React", "D3.js", "Python", "Pandas", "PostgreSQL", "Chart.js", "API REST"],
      status: "En Progreso",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Blockchain Wallet",
      year: "2022",
      category: "Blockchain",
      description: "Billetera digital segura para criptomonedas con soporte multi-chain, intercambio integrado, staking automático y medidas de seguridad avanzadas.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "Hardhat", "IPFS"],
      status: "Beta",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 7,
      title: "Smart Home IoT System",
      year: "2024",
      category: "IoT",
      description: "Sistema integral de domótica con control de dispositivos inteligentes, automatización basada en IA, monitoreo energético y interfaz móvil intuitiva.",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React Native", "Python", "InfluxDB", "Grafana"],
      status: "En Progreso",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 8,
      title: "Video Streaming Platform",
      year: "2024",
      category: "Web Development",
      description: "Plataforma de streaming de video con transmisión en vivo, chat en tiempo real, sistema de suscripciones y análisis de audiencia avanzado.",
      technologies: ["Next.js", "WebRTC", "Socket.io", "FFmpeg", "AWS", "Redis", "PostgreSQL"],
      status: "Beta",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 9,
      title: "Fitness Tracking App",
      year: "2023",
      category: "Mobile App",
      description: "Aplicación de seguimiento fitness con planes personalizados, integración con wearables, comunidad social y gamificación para motivar el ejercicio.",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit", "ML Kit", "Stripe"],
      status: "Completado",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 10,
      title: "Restaurant Management System",
      year: "2023",
      category: "Web Development",
      description: "Sistema completo de gestión restaurantera con POS, inventario, reservas online, delivery tracking y análisis de ventas en tiempo real.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Pusher", "Stripe", "Google Maps", "PWA"],
      status: "Completado",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 11,
      title: "Machine Learning Predictor",
      year: "2022",
      category: "AI/ML",
      description: "Sistema de predicción de mercado financiero usando machine learning, análisis de sentimientos y procesamiento de big data para trading algorítmico.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Apache Kafka", "Docker"],
      status: "Beta",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 12,
      title: "Social Media Analytics Tool",
      year: "2024",
      category: "Data Science",
      description: "Herramienta de análisis de redes sociales con métricas avanzadas, seguimiento de tendencias, análisis de competencia y reportes automatizados.",
      technologies: ["React", "Python", "FastAPI", "MongoDB", "Celery", "Chart.js", "Twitter API"],
      status: "En Progreso",
      image: "/api/placeholder/400/300",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  const texts = {
    es: {
      nav: ['Inicio', 'Proyectos', 'Precios', 'Equipo', 'Contacto'],
      hero: {
        title: 'TIKNO - Innovación Digital',
        subtitle: 'Transformamos ideas en soluciones tecnológicas extraordinarias. Desarrollo de software de clase mundial con las últimas tecnologías.'
      },
      buttons: ['Ver Proyectos', 'Contactar', 'Planes'],
      footer: 'Todos los derechos reservados',
      filters: {
        all: 'Todos',
        'Web Development': 'Desarrollo Web',
        'Mobile App': 'Apps Móviles',
        'AI/ML': 'Inteligencia Artificial',
        'Web Design': 'Diseño Web',
        'Data Science': 'Ciencia de Datos',
        'Blockchain': 'Blockchain',
        'IoT': 'Internet de las Cosas'
      },
      pricing: {
        title: 'Planes de Desarrollo',
        subtitle: 'Soluciones profesionales adaptadas a tu presupuesto y necesidades',
        basic: {
          title: 'Básico',
          description: 'Sitios web profesionales y aplicaciones simples',
          price: '$250 - $350',
          features: ['Diseño responsivo', 'SEO básico', 'Hosting incluido', 'Soporte 30 días']
        },
        professional: {
          title: 'Profesional',
          description: 'Aplicaciones complejas con funcionalidades avanzadas',
          price: '$400 - $600',
          features: ['Base de datos', 'Panel admin', 'API integrada', 'Soporte 90 días', 'Mantenimiento']
        },
        enterprise: {
          title: 'Enterprise',
          description: 'Soluciones corporativas completas y escalables',
          price: '$1000+',
          features: ['Arquitectura escalable', 'Seguridad avanzada', 'Integración completa', 'Soporte 24/7', 'Consultoría técnica']
        }
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Desarrolladores expertos comprometidos con la excelencia tecnológica'
      },
      contact: {
        title: 'Hablemos de tu Proyecto',
        subtitle: 'Estamos listos para convertir tu visión en realidad digital',
        form: {
          name: 'Tu Nombre',
          email: 'Correo Electrónico',
          message: 'Cuéntanos sobre tu proyecto...',
          send: 'Enviar Mensaje'
        }
      }
    },
    en: {
      nav: ['Home', 'Projects', 'Pricing', 'Team', 'Contact'],
      hero: {
        title: 'TIKNO - Digital Innovation',
        subtitle: 'We transform ideas into extraordinary technological solutions. World-class software development with cutting-edge technologies.'
      },
      buttons: ['View Projects', 'Contact', 'Plans'],
      footer: 'All rights reserved',
      filters: {
        all: 'All',
        'Web Development': 'Web Development',
        'Mobile App': 'Mobile Apps',
        'AI/ML': 'Artificial Intelligence',
        'Web Design': 'Web Design',
        'Data Science': 'Data Science',
        'Blockchain': 'Blockchain',
        'IoT': 'Internet of Things'
      },
      pricing: {
        title: 'Development Plans',
        subtitle: 'Professional solutions tailored to your budget and needs',
        basic: {
          title: 'Basic',
          description: 'Professional websites and simple applications',
          price: '$250 - $350',
          features: ['Responsive design', 'Basic SEO', 'Hosting included', '30-day support']
        },
        professional: {
          title: 'Professional',
          description: 'Complex applications with advanced functionalities',
          price: '$400 - $600',
          features: ['Database', 'Admin panel', 'API integration', '90-day support', 'Maintenance']
        },
        enterprise: {
          title: 'Enterprise',
          description: 'Complete and scalable corporate solutions',
          price: '$1000+',
          features: ['Scalable architecture', 'Advanced security', 'Full integration', '24/7 support', 'Technical consulting']
        }
      },
      team: {
        title: 'Our Team',
        subtitle: 'Expert developers committed to technological excellence'
      },
      contact: {
        title: 'Let\'s Talk About Your Project',
        subtitle: 'We\'re ready to turn your vision into digital reality',
        form: {
          name: 'Your Name',
          email: 'Email Address',
          message: 'Tell us about your project...',
          send: 'Send Message'
        }
      }
    }
  };

  useEffect(() => {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const hideCursor = () => cursor.classList.add('hidden');
    const showCursor = () => cursor.classList.remove('hidden');

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

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
        targets: '.section-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
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

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
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

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        const categoryMap = {
          'sustainability': 'Sostenibilidad',
          'administration': 'Administración', 
          'creativity': 'Creatividad',
          'analytics': 'Analytics',
          'social': 'Social',
          'security': 'Seguridad',
          'ecommerce': 'E-commerce',
          'education': 'Educación',
          'health': 'Salud',
          'fintech': 'Fintech',
          'iot': 'IoT',
          'gaming': 'Gaming'
        };
        return project.category === categoryMap[activeFilter];
      });

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handle project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Handle navigation
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="logo-container">
            <h1 className="loading-logo">TIKNO</h1>
            <div className="loading-subtitle">Innovación cercana, software a tu alcance</div>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
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
        <div className="logo">
          <span className="logo-text">TIKNO</span>
          <span className="logo-subtitle">Digital Innovation</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-item" onClick={() => scrollToSection(heroRef)}>{texts[currentLanguage].nav[0]}</a>
          <a href="#" className="nav-item" onClick={() => scrollToSection(projectsRef)}>{texts[currentLanguage].nav[1]}</a>
          <a href="#" className="nav-item" onClick={() => scrollToSection(pricingRef)}>{texts[currentLanguage].nav[2]}</a>
          <a href="#" className="nav-item" onClick={() => scrollToSection(teamRef)}>{texts[currentLanguage].nav[3]}</a>
          <a href="#" className="nav-item" onClick={() => scrollToSection(contactRef)}>{texts[currentLanguage].nav[4]}</a>
        </nav>
        <div className="language-toggle">
          <button
            className={`lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
            onClick={() => setCurrentLanguage('es')}
          >
            ES
          </button>
          <button
            className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
            onClick={() => setCurrentLanguage('en')}
          >
            EN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">🚀 Innovación cercana, software a tu alcance</span>
          </div>
          <h1 className="hero-title">
            <span className="title-main">{texts[currentLanguage].hero.title}</span>
          </h1>
          <p className="hero-subtitle">{texts[currentLanguage].hero.subtitle}</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfacción</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => scrollToSection(projectsRef)}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span>Ver Proyectos</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => scrollToSection(contactRef)}
            >
              <span>Contactar</span>
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <div className="card-text">Web Development</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📱</div>
            <div className="card-text">Mobile Apps</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🤖</div>
            <div className="card-text">AI Solutions</div>
          </div>
        </div>
      </section>

      {/* Projects Section - Completely Redesigned */}
      <section ref={projectsRef} className="projects-section">
        <div className="container">
          {/* Hero Header */}
          <div className="projects-hero">
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
                <span>Proyectos Destacados</span>
              </div>
              <h2 className="hero-title">
                Creamos <span className="gradient-text">Experiencias Digitales</span> Extraordinarias
              </h2>
              <p className="hero-description">
                Cada línea de código cuenta una historia. Descubre cómo transformamos ideas innovadoras 
                en soluciones digitales que impulsan el crecimiento de nuestros clientes.
              </p>
              <div className="hero-metrics">
                <div className="metric-card">
                  <div className="metric-icon">🚀</div>
                  <div className="metric-content">
                    <span className="metric-number">75+</span>
                    <span className="metric-label">Proyectos Entregados</span>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">⭐</div>
                  <div className="metric-content">
                    <span className="metric-number">4.9/5</span>
                    <span className="metric-label">Calificación Promedio</span>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🎯</div>
                  <div className="metric-content">
                    <span className="metric-number">100%</span>
                    <span className="metric-label">Proyectos a Tiempo</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-grid">
                <div className="visual-card card-1">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon">💻</div>
                    <span>Web Apps</span>
                  </div>
                </div>
                <div className="visual-card card-2">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon">📱</div>
                    <span>Mobile</span>
                  </div>
                </div>
                <div className="visual-card card-3">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon">🤖</div>
                    <span>AI/ML</span>
                  </div>
                </div>
                <div className="visual-card card-4">
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon">☁️</div>
                    <span>Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="featured-projects">
            <div className="section-header">
              <h3 className="section-title">Proyectos Destacados</h3>
              <p className="section-subtitle">Soluciones que marcan la diferencia</p>
            </div>
            
            <div className="projects-showcase">
              <div className="project-highlight main-project">
                <div className="project-media">
                  <div className="media-container">
                    <div className="project-preview">
                      <div className="preview-header">
                        <div className="browser-controls">
                          <span className="control red"></span>
                          <span className="control yellow"></span>
                          <span className="control green"></span>
                        </div>
                        <div className="url-bar">nicorteban.dev/proyecto-destacado</div>
                      </div>
                      <div className="preview-content">
                        <div className="content-placeholder">
                          <div className="placeholder-header"></div>
                          <div className="placeholder-nav"></div>
                          <div className="placeholder-hero"></div>
                          <div className="placeholder-grid">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-overlay">
                    <button className="view-project-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2"/>
                        <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Ver Proyecto
                    </button>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-category">E-commerce</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h4 className="project-title">Plataforma E-commerce Avanzada</h4>
                  <p className="project-description">
                    Sistema completo de comercio electrónico con IA para recomendaciones personalizadas, 
                    gestión de inventario en tiempo real y analytics avanzados.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">+3 más</span>
                  </div>
                  <div className="project-stats">
                    <div className="stat">
                      <span className="stat-value">300%</span>
                      <span className="stat-label">Aumento en ventas</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">45%</span>
                      <span className="stat-label">Mejor conversión</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="secondary-projects">
                <div className="project-card compact">
                  <div className="card-header">
                    <div className="project-icon">🏥</div>
                    <div className="project-meta">
                      <span className="category">Salud</span>
                      <span className="year">2024</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5 className="project-title">Sistema de Gestión Hospitalaria</h5>
                    <p className="project-description">
                      Plataforma integral para gestión de pacientes, citas médicas y expedientes digitales.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">Vue.js</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">PostgreSQL</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="view-btn">
                      <span>Ver Detalles</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="project-card compact">
                  <div className="card-header">
                    <div className="project-icon">📚</div>
                    <div className="project-meta">
                      <span className="category">Educación</span>
                      <span className="year">2023</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5 className="project-title">Plataforma de Aprendizaje Online</h5>
                    <p className="project-description">
                      LMS completo con videoconferencias, evaluaciones automáticas y seguimiento de progreso.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">NestJS</span>
                      <span className="tech-tag">MySQL</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="view-btn">
                      <span>Ver Detalles</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="project-card compact">
                  <div className="card-header">
                    <div className="project-icon">💰</div>
                    <div className="project-meta">
                      <span className="category">Fintech</span>
                      <span className="year">2023</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5 className="project-title">App de Gestión Financiera</h5>
                    <p className="project-description">
                      Aplicación móvil para control de gastos, inversiones y planificación financiera personal.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">React Native</span>
                      <span className="tech-tag">Express</span>
                      <span className="tech-tag">Redis</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button className="view-btn">
                      <span>Ver Detalles</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies & Expertise */}
          <div className="tech-expertise">
            <div className="section-header">
              <h3 className="section-title">Tecnologías que Dominamos</h3>
              <p className="section-subtitle">Stack tecnológico de vanguardia para soluciones robustas</p>
            </div>
            
            <div className="tech-categories">
              <div className="tech-category">
                <div className="category-header">
                  <div className="category-icon">🎨</div>
                  <h4 className="category-title">Frontend</h4>
                </div>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-logo">⚛️</div>
                    <span className="tech-name">React</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🅰️</div>
                    <span className="tech-name">Angular</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">💚</div>
                    <span className="tech-name">Vue.js</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">⚡</div>
                    <span className="tech-name">Next.js</span>
                  </div>
                </div>
              </div>

              <div className="tech-category">
                <div className="category-header">
                  <div className="category-icon">⚙️</div>
                  <h4 className="category-title">Backend</h4>
                </div>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-logo">🟢</div>
                    <span className="tech-name">Node.js</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🐍</div>
                    <span className="tech-name">Python</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">☕</div>
                    <span className="tech-name">Java</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🔷</div>
                    <span className="tech-name">.NET</span>
                  </div>
                </div>
              </div>

              <div className="tech-category">
                <div className="category-header">
                  <div className="category-icon">🗄️</div>
                  <h4 className="category-title">Base de Datos</h4>
                </div>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-logo">🍃</div>
                    <span className="tech-name">MongoDB</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🐘</div>
                    <span className="tech-name">PostgreSQL</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🔥</div>
                    <span className="tech-name">Firebase</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">⚡</div>
                    <span className="tech-name">Redis</span>
                  </div>
                </div>
              </div>

              <div className="tech-category">
                <div className="category-header">
                  <div className="category-icon">☁️</div>
                  <h4 className="category-title">Cloud & DevOps</h4>
                </div>
                <div className="tech-grid">
                  <div className="tech-item">
                    <div className="tech-logo">🟠</div>
                    <span className="tech-name">AWS</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🔵</div>
                    <span className="tech-name">Azure</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">🐳</div>
                    <span className="tech-name">Docker</span>
                  </div>
                  <div className="tech-item">
                    <div className="tech-logo">⚓</div>
                    <span className="tech-name">Kubernetes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="projects-cta">
            <div className="cta-background">
              <div className="cta-pattern"></div>
              <div className="cta-glow"></div>
            </div>
            <div className="cta-content">
              <div className="cta-text">
                <h3 className="cta-title">¿Listo para crear algo increíble?</h3>
                <p className="cta-description">
                  Transformemos tu visión en una realidad digital que supere todas las expectativas. 
                  Nuestro equipo está preparado para llevar tu proyecto al siguiente nivel.
                </p>
              </div>
              <div className="cta-actions">
                <button 
                  className="cta-button primary"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <span>Iniciar Mi Proyecto</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => scrollToSection(pricingRef)}
                >
                  <span>Ver Planes y Precios</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Completely Redesigned */}
      <section ref={pricingRef} className="pricing-section">
        <div className="container">
          {/* Hero Header */}
          <div className="pricing-hero">
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
                <span>Planes de Desarrollo</span>
              </div>
              <h2 className="hero-title">
                Soluciones <span className="gradient-text">Escalables</span> para Cada Etapa
              </h2>
              <p className="hero-description">
                Desde startups innovadoras hasta empresas consolidadas, diseñamos planes 
                que se adaptan perfectamente a tus objetivos y presupuesto.
              </p>
              <div className="hero-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <span className="benefit-text">Entrega garantizada en tiempo</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <span className="benefit-text">Garantía de satisfacción 100%</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💬</div>
                  <span className="benefit-text">Consulta estratégica gratuita</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="pricing-preview">
                <div className="preview-card card-1">
                  <div className="card-header">
                    <div className="plan-icon">🚀</div>
                    <span className="plan-name">Starter</span>
                  </div>
                  <div className="card-price">$1,500</div>
                  <div className="card-features">
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                  </div>
                </div>
                <div className="preview-card card-2 featured">
                  <div className="card-header">
                    <div className="plan-icon">💎</div>
                    <span className="plan-name">Pro</span>
                  </div>
                  <div className="card-price">$3,500</div>
                  <div className="card-features">
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                  </div>
                </div>
                <div className="preview-card card-3">
                  <div className="card-header">
                    <div className="plan-icon">👑</div>
                    <span className="plan-name">Enterprise</span>
                  </div>
                  <div className="card-price">Custom</div>
                  <div className="card-features">
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                    <div className="feature-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="pricing-plans">
            <div className="plans-grid">
              {/* Starter Plan */}
              <div className="plan-card starter">
                <div className="card-background">
                  <div className="bg-pattern"></div>
                  <div className="bg-gradient"></div>
                </div>
                
                <div className="plan-header">
                  <div className="plan-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="plan-info">
                    <h3 className="plan-name">Starter</h3>
                    <p className="plan-tagline">Perfecto para comenzar</p>
                  </div>
                </div>
                
                <div className="plan-pricing">
                  <div className="price-main">
                    <span className="currency">$</span>
                    <span className="amount">1,500</span>
                  </div>
                  <div className="price-details">
                    <span className="price-period">por proyecto</span>
                    <span className="price-note">Ideal para MVPs y prototipos</span>
                  </div>
                </div>
                
                <div className="plan-features">
                  <div className="features-header">
                    <h4>✨ Incluye:</h4>
                  </div>
                  <ul className="features-list">
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Aplicación web responsive</span>
                    </li>
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Hasta 5 páginas/secciones</span>
                    </li>
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Base de datos básica</span>
                    </li>
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Panel de administración</span>
                    </li>
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Hosting por 6 meses</span>
                    </li>
                    <li className="feature-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Soporte técnico 30 días</span>
                    </li>
                  </ul>
                </div>
                
                <div className="plan-metrics">
                  <div className="metric">
                    <span className="metric-value">2-3</span>
                    <span className="metric-label">semanas</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">3</span>
                    <span className="metric-label">revisiones</span>
                  </div>
                </div>
                
                <button className="plan-button">
                  <span>Comenzar Proyecto</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>

              {/* Professional Plan */}
              <div className="plan-card professional featured">
                <div className="popular-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                  </svg>
                  <span>Más Popular</span>
                </div>
                
                <div className="card-background">
                  <div className="bg-pattern premium"></div>
                  <div className="bg-gradient premium"></div>
                  <div className="bg-glow"></div>
                </div>
                
                <div className="plan-header">
                  <div className="plan-icon premium">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="plan-info">
                    <h3 className="plan-name">Professional</h3>
                    <p className="plan-tagline">Para empresas en crecimiento</p>
                  </div>
                </div>
                
                <div className="plan-pricing">
                  <div className="price-main">
                    <span className="currency">$</span>
                    <span className="amount">3,500</span>
                  </div>
                  <div className="price-details">
                    <span className="price-period">por proyecto</span>
                    <span className="price-note">Solución completa y escalable</span>
                  </div>
                  <div className="savings-badge">
                    <span>Ahorra $800 vs múltiples servicios</span>
                  </div>
                </div>
                
                <div className="plan-features">
                  <div className="features-header">
                    <h4>🚀 Todo lo anterior, más:</h4>
                  </div>
                  <ul className="features-list">
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Aplicación web avanzada</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Hasta 15 páginas/módulos</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>API REST completa</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Integraciones de terceros</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Dashboard analytics</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Hosting premium 1 año</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Soporte prioritario 90 días</span>
                    </li>
                    <li className="feature-item premium">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Capacitación del equipo</span>
                    </li>
                  </ul>
                </div>
                
                <div className="plan-metrics">
                  <div className="metric">
                    <span className="metric-value">4-6</span>
                    <span className="metric-label">semanas</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">5</span>
                    <span className="metric-label">revisiones</span>
                  </div>
                </div>
                
                <button className="plan-button primary">
                  <span>Elegir Professional</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="plan-card enterprise">
                <div className="card-background">
                  <div className="bg-pattern enterprise"></div>
                  <div className="bg-gradient enterprise"></div>
                </div>
                
                <div className="plan-header">
                  <div className="plan-icon enterprise">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M5 16V9h14V2H5v14zm14 0h3v5H2v-5h3v-7H2V4h3V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h3v5h-3v7z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="plan-info">
                    <h3 className="plan-name">Enterprise</h3>
                    <p className="plan-tagline">Soluciones empresariales</p>
                  </div>
                </div>
                
                <div className="plan-pricing">
                  <div className="price-main custom">
                    <span className="amount">Personalizado</span>
                  </div>
                  <div className="price-details">
                    <span className="price-period">según requerimientos</span>
                    <span className="price-note">Arquitectura escalable y robusta</span>
                  </div>
                </div>
                
                <div className="plan-features">
                  <div className="features-header">
                    <h4>👑 Solución empresarial:</h4>
                  </div>
                  <ul className="features-list">
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Arquitectura de microservicios</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Escalabilidad automática</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Seguridad nivel empresarial</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Integración con sistemas legacy</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>DevOps y CI/CD completo</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Gerente de proyecto dedicado</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>SLA 99.9% garantizado</span>
                    </li>
                    <li className="feature-item enterprise">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>Soporte 24/7 dedicado</span>
                    </li>
                  </ul>
                </div>
                
                <div className="plan-metrics">
                  <div className="metric">
                    <span className="metric-value">8-16</span>
                    <span className="metric-label">semanas</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">∞</span>
                    <span className="metric-label">revisiones</span>
                  </div>
                </div>
                
                <button className="plan-button">
                  <span>Solicitar Cotización</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Process & Guarantees */}
          <div className="pricing-process">
            <div className="section-header">
              <h3 className="section-title">Nuestro Proceso de Desarrollo</h3>
              <p className="section-subtitle">Metodología probada para resultados excepcionales</p>
            </div>
            
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">01</div>
                <div className="step-content">
                  <div className="step-icon">💡</div>
                  <h4 className="step-title">Descubrimiento</h4>
                  <p className="step-description">
                    Analizamos tus necesidades, objetivos y definimos la estrategia técnica óptima.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">02</div>
                <div className="step-content">
                  <div className="step-icon">🎨</div>
                  <h4 className="step-title">Diseño & Prototipo</h4>
                  <p className="step-description">
                    Creamos wireframes, diseños UI/UX y prototipos interactivos para validar la experiencia.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">03</div>
                <div className="step-content">
                  <div className="step-icon">⚙️</div>
                  <h4 className="step-title">Desarrollo</h4>
                  <p className="step-description">
                    Implementamos la solución con las mejores prácticas, testing continuo y entregas incrementales.
                  </p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">04</div>
                <div className="step-content">
                  <div className="step-icon">🚀</div>
                  <h4 className="step-title">Lanzamiento</h4>
                  <p className="step-description">
                    Desplegamos tu proyecto, realizamos pruebas finales y te capacitamos para su uso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees & Support */}
          <div className="pricing-guarantees">
            <div className="guarantees-grid">
              <div className="guarantee-card">
                <div className="guarantee-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="guarantee-title">Garantía de Satisfacción</h4>
                <p className="guarantee-description">
                  Si no estás 100% satisfecho, trabajamos hasta lograrlo o devolvemos tu inversión.
                </p>
              </div>
              
              <div className="guarantee-card">
                <div className="guarantee-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="guarantee-title">Entrega Puntual</h4>
                <p className="guarantee-description">
                  Cumplimos los plazos acordados o compensamos con servicios adicionales gratuitos.
                </p>
              </div>
              
              <div className="guarantee-card">
                <div className="guarantee-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M13 8H7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17 12H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4 className="guarantee-title">Soporte Continuo</h4>
                <p className="guarantee-description">
                  Mantenimiento, actualizaciones y soporte técnico especializado cuando lo necesites.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pricing-cta">
            <div className="cta-background">
              <div className="cta-pattern"></div>
              <div className="cta-glow"></div>
            </div>
            <div className="cta-content">
              <div className="cta-text">
                <h3 className="cta-title">¿No estás seguro cuál plan elegir?</h3>
                <p className="cta-description">
                  Agenda una consulta gratuita de 30 minutos y te ayudaremos a encontrar 
                  la solución perfecta para tu proyecto y presupuesto.
                </p>
              </div>
              <div className="cta-actions">
                <button 
                  className="cta-button primary"
                  onClick={() => scrollToSection(contactRef)}
                >
                  <span>Consulta Gratuita</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  <span>Ver Proyectos Anteriores</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nuestro Equipo
            </div>
            <h2 className="section-title">
              Los Expertos Detrás de Cada <span className="highlight-text">Proyecto</span>
            </h2>
            <p className="section-subtitle">
              Un equipo multidisciplinario comprometido con la excelencia y la innovación tecnológica. 
              Conoce a los profesionales que harán realidad tu visión digital.
            </p>
            <div className="team-stats">
              <div className="team-stat">
                <span className="stat-number">90+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="team-stat">
                <span className="stat-number">9</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="team-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfacción del Cliente</span>
              </div>
            </div>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-card">
                <div className="member-background">
                  <div className="bg-pattern"></div>
                  <div className="bg-gradient"></div>
                </div>
                
                <div className="member-header">
                  <div className="member-avatar">
                    <div className="avatar-ring"></div>
                    <div className="avatar-placeholder">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="status-indicator online"></div>
                  </div>
                  <div className="member-badge">Co-Founder</div>
                </div>
                
                <div className="member-content">
                  <div className="member-info">
                    <h3>Nicolás Moreno</h3>
                    <p className="member-role">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Full Stack Developer & Arquitecto de Software
                    </p>
                  </div>
                  
                  <div className="member-specialties">
                    <h4>Especialidades</h4>
                    <div className="specialty-grid">
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Arquitectura de Software</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Desarrollo Frontend</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>APIs & Microservicios</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Optimización de Performance</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Stack Tecnológico</h4>
                    <div className="skills-container">
                      <span className="skill-tag react">React</span>
                      <span className="skill-tag node">Node.js</span>
                      <span className="skill-tag python">Python</span>
                      <span className="skill-tag aws">AWS</span>
                      <span className="skill-tag typescript">TypeScript</span>
                      <span className="skill-tag docker">Docker</span>
                    </div>
                  </div>
                  
                  <div className="member-description">
                    <p>
                      Especialista en desarrollo web moderno con más de 5 años de experiencia creando 
                      soluciones escalables y de alto rendimiento. Apasionado por las tecnologías emergentes 
                      y las mejores prácticas de desarrollo.
                    </p>
                  </div>
                  
                  <div className="member-achievements">
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM17 7h-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">50+</span>
                        <span className="achievement-label">Proyectos Exitosos</span>
                      </div>
                    </div>
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">5</span>
                        <span className="achievement-label">Años de Experiencia</span>
                      </div>
                    </div>
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                          <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">98%</span>
                        <span className="achievement-label">Satisfacción Cliente</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="member-footer">
                  <div className="member-contact">
                    <a href="mailto:nicolas@tikno.dev" className="contact-btn primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Contactar
                    </a>
                    <div className="social-links">
                      <a href="#" className="social-link linkedin">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link github">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link portfolio">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-card">
                <div className="member-background">
                  <div className="bg-pattern"></div>
                  <div className="bg-gradient"></div>
                </div>
                
                <div className="member-header">
                  <div className="member-avatar">
                    <div className="avatar-ring"></div>
                    <div className="avatar-placeholder">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="status-indicator online"></div>
                  </div>
                  <div className="member-badge">Co-Founder</div>
                </div>
                
                <div className="member-content">
                  <div className="member-info">
                    <h3>Esteban Lozano</h3>
                    <p className="member-role">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Backend Developer & DevOps Engineer
                    </p>
                  </div>
                  
                  <div className="member-specialties">
                    <h4>Especialidades</h4>
                    <div className="specialty-grid">
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Arquitectura Backend</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>DevOps & CI/CD</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Infraestructura Cloud</span>
                      </div>
                      <div className="specialty-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Seguridad & Monitoreo</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Stack Tecnológico</h4>
                    <div className="skills-container">
                      <span className="skill-tag java">Java</span>
                      <span className="skill-tag spring">Spring Boot</span>
                      <span className="skill-tag docker">Docker</span>
                      <span className="skill-tag kubernetes">Kubernetes</span>
                      <span className="skill-tag aws">AWS</span>
                      <span className="skill-tag postgresql">PostgreSQL</span>
                    </div>
                  </div>
                  
                  <div className="member-description">
                    <p>
                      Experto en arquitecturas de backend robustas y escalables con más de 4 años de experiencia. 
                      Especializado en microservicios, infraestructura cloud y automatización de procesos de desarrollo.
                    </p>
                  </div>
                  
                  <div className="member-achievements">
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M9 11H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM17 7h-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">40+</span>
                        <span className="achievement-label">Proyectos Exitosos</span>
                      </div>
                    </div>
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">4</span>
                        <span className="achievement-label">Años de Experiencia</span>
                      </div>
                    </div>
                    <div className="achievement">
                      <div className="achievement-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="achievement-content">
                        <span className="achievement-number">99.9%</span>
                        <span className="achievement-label">Uptime Garantizado</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="member-footer">
                  <div className="member-contact">
                    <a href="mailto:esteban@tikno.dev" className="contact-btn primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Contactar
                    </a>
                    <div className="social-links">
                      <a href="#" className="social-link linkedin">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link github">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link portfolio">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-cta">
            <div className="cta-content">
              <h3>¿Quieres Conocer Más Sobre Nuestro Equipo?</h3>
              <p>Descubre cómo nuestro equipo puede ayudarte a llevar tu proyecto al siguiente nivel</p>
              <div className="cta-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection(contactRef)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Contactar al Equipo
                </button>
                <button className="btn btn-outline" onClick={() => scrollToSection(projectsRef)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Ver Nuestro Trabajo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{texts[currentLanguage].contact.title}</h2>
            <p className="section-subtitle">{texts[currentLanguage].contact.subtitle}</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-header">
                  <h3>Hablemos de tu proyecto</h3>
                  <p>Estamos aquí para convertir tus ideas en realidad</p>
                </div>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="method-info">
                      <h4>Email</h4>
                      <p>contacto@nicorteban.com</p>
                      <span className="response-time">Respuesta en 24h</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="method-info">
                      <h4>WhatsApp</h4>
                      <p>+57 300 123 4567</p>
                      <span className="response-time">Respuesta inmediata</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="method-info">
                      <h4>Ubicación</h4>
                      <p>Colombia</p>
                      <span className="response-time">Trabajo remoto</span>
                    </div>
                  </div>
                </div>
                
                <div className="contact-stats">
                  <div className="stat">
                    <span className="stat-number">24h</span>
                    <span className="stat-label">Tiempo de respuesta</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Proyectos entregados</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-card">
                <div className="form-header">
                  <h3>Cuéntanos sobre tu proyecto</h3>
                  <p>Completa el formulario y te contactaremos pronto</p>
                </div>
                
                <form className="contact-form-inner">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre completo</label>
                      <input type="text" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input type="tel" placeholder="+57 300 123 4567" />
                    </div>
                    <div className="form-group">
                      <label>Tipo de proyecto</label>
                      <select required>
                        <option value="">Selecciona una opción</option>
                        <option value="web">Sitio Web</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="app">Aplicación Móvil</option>
                        <option value="custom">Desarrollo Personalizado</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Presupuesto estimado</label>
                    <select required>
                      <option value="">Selecciona un rango</option>
                      <option value="250-350">$250 - $350 USD</option>
                      <option value="400-600">$400 - $600 USD</option>
                      <option value="1000+">$1000+ USD</option>
                      <option value="custom">Presupuesto personalizado</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Describe tu proyecto</label>
                    <textarea placeholder="Cuéntanos los detalles de tu proyecto, objetivos y cualquier requerimiento específico..." rows="4" required></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <span>Enviar mensaje</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2"/>
                      <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className="modal-year">{selectedProject.year}</span>
            </div>
            <div className="modal-body">
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.fullDescription}</p>
              <div className="modal-tech">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="modal-actions">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                    Ver Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                    Ver Código
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;