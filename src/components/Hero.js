import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  const getArcPosition = (index, total) => {
    const angleRange = 50; 
    const startAngle = (180 - angleRange) / 2;
    const angle = (angleRange / (total - 1)) * index + startAngle;
    const radian = (angle * Math.PI) / 180;
    
    // He subido un poco el radiusX (de 30 a 35) para que las cards grandes respiren
    const radiusX = 35; 
    const radiusY = 10; 

    return {
      x: Math.cos(radian) * radiusX * -1,
      y: Math.sin(radian) * radiusY,
      rotation: (index - (total - 1) / 2) * 12 
    };
  };

  const displayProjects = projects.slice(0, 5);

  return (
    <section className="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      
      {/* TEXTURA DE GRANO */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', zIndex: 2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10vh' 
      }}>
        
        {/* LOGO TIKNO */}
        <div style={{ textAlign: 'center', marginBottom: '-6vh', zIndex: 5 }}>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 11vw, 9rem)', 
            margin: 0, 
            fontWeight: 800,
            color: '#FFF',
            letterSpacing: '-4px',
            lineHeight: 0.8
          }}>
            TIKNO
          </h1>
          <p style={{ 
            color: '#BC5FD9', 
            letterSpacing: '12px', 
            fontSize: '0.8rem', 
            marginTop: '10px',
            fontWeight: 400 
          }}>
            INNOVATION
          </p>
        </div>

        {/* CONTENEDOR DE CARDS */}
        <div style={{ 
          position: 'relative', 
          height: '35vh', // Aumenté un poco el alto para contener las cards más grandes
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4vh' 
        }}>
          {displayProjects.map((project, index) => {
            const pos = getArcPosition(index, displayProjects.length);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: `${pos.x}vw`, 
                  y: `${pos.y}vh`,
                  rotate: pos.rotation
                }}
                whileHover={{ 
                  y: `${pos.y - 4}vh`,
                  scale: 1.08,
                  zIndex: 100, // Z-index alto para que la carta grande no se tape al hacer hover
                  transition: { duration: 0.8 }
                }}
                style={{
                  position: 'absolute',
                  // --- ESTA ES LA LÍNEA QUE MANEJA EL TAMAÑO ---
                  width: 'clamp(220px, 22vw, 320px)', 
                  // ---------------------------------------------
                  aspectRatio: '16/10',
                  background: '#111',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            );
          })}
        </div>

        {/* SECCIÓN INFERIOR */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '20vh', 
          zIndex: 200 
        }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', 
            fontWeight: 300, 
            marginBottom: '35px',
            maxWidth: '650px',
            marginInline: 'auto'
          }}>
            {t.hero.mission}
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/proyectos" className="btn-tikno-new">
              {t.hero.btnProjects}
            </Link>
            <Link to="/contacto" className="btn-tikno-ghost">
              {t.hero.btnContact}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .btn-tikno-new {
          background: #BC5FD9;
          color: white;
          padding: 12px 35px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: 0.6s;
        }
        .btn-tikno-new:hover { background: #a348c0; transform: translateY(-2px); }

        .btn-tikno-ghost {
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 12px 35px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.8s;
        }
        .btn-tikno-ghost:hover { background: rgba(255,255,255,0.1); border-color: white; }
      `}</style>
    </section>
  );
};

export default Hero;