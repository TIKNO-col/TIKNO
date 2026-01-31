import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data';
import ProfileCard from '../components/ProfileCard';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const TeamPage = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  // Parallax para el texto de fondo
  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Configuración de colores de brillo para cada miembro
  const behindGlowColors = [
    "hsla(280, 100%, 70%, 0.4)", // Nicolas (Purple)
    "hsla(210, 100%, 70%, 0.4)", // Esteban (Blue)
    "hsla(356, 100%, 70%, 0.4)"  // Michael (Red/Orange)
  ];

  return (
    <div style={{ background: '#050505', minHeight: '300vh', position: 'relative', overflow: 'hidden' }}>
      <SEO 
        title="Nuestro Equipo | Talento Detrás de TIKNO" 
        description="Conoce a los expertos en ingeniería y diseño que transforman negocios a través de la tecnología en TIKNO Studio."
        url="/equipo"
      />
      
      {/* TEXTO DE FONDO GIGANTE (ESTILO EDITORIAL) */}
      <motion.div style={{
        position: 'fixed', top: '20%', left: '5%', whiteSpace: 'nowrap',
        fontSize: '25vw', fontWeight: 900, color: 'rgba(255,255,255,0.02)',
        zIndex: 0, pointerEvents: 'none', x: bgTextX, textTransform: 'uppercase'
      }}>
        {t.nav.equipo} TIKNO TEAM
      </motion.div>

      {/* HEADER SECTION */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ 
              fontSize: 'clamp(4rem, 15vw, 12rem)', fontWeight: 900, color: '#FFF', 
              lineHeight: 0.8, letterSpacing: '-10px', textTransform: 'uppercase'
            }}
          >
            {t.nav.equipo}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ 
              fontSize: '1.5rem', color: '#BC5FD9', letterSpacing: '10px', 
              marginTop: '20px', textTransform: 'uppercase', fontWeight: 300 
            }}
          >
            {t.team.subtitle}
          </motion.p>
        </div>
      </section>

      {/* MEMBERS SECTION - CINEMATIC SCROLL */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {teamMembers.map((member, index) => (
          <section 
            key={index} 
            style={{ 
              height: '100vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              padding: '0 5%'
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, type: 'spring' }}
              style={{ display: 'flex', alignItems: 'center', gap: '60px', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <ProfileCard
                name={member.name}
                title={member.role[language]}
                handle={member.handle}
                status={member.status}
                avatarUrl={member.avatarUrl}
                contactText={language === 'es' ? 'Contactar' : 'Contact'}
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => navigate('/contacto')}
                behindGlowColor={behindGlowColors[index]}
              />

              <div style={{ maxWidth: '400px', textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                <motion.h2 
                  style={{ fontSize: '4rem', fontWeight: 900, color: '#FFF', margin: 0, lineHeight: 1 }}
                >
                  0{index + 1}
                </motion.h2>
                <div style={{ height: '2px', width: '60px', background: '#BC5FD9', margin: '20px 0', marginLeft: index % 2 === 0 ? '0' : 'auto' }} />
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '30px' }}>
                  {member.description[language]}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                  {member.skills.map((skill, i) => (
                    <span key={i} style={{
                      padding: '8px 20px', borderRadius: '30px', background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)', color: '#FFF', fontSize: '0.8rem'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>

      {/* FOOTER CALL TO ACTION IN TEAM */}
      <section style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/contacto')}
          style={{
            background: '#BC5FD9', color: '#FFF', border: 'none',
            padding: '30px 80px', borderRadius: '100px', fontSize: '1.5rem',
            fontWeight: 900, cursor: 'pointer', boxShadow: '0 20px 40px rgba(188, 95, 217, 0.3)'
          }}
        >
          {t.hero.btnContact}
        </motion.button>
      </section>

    </div>
  );
};

export default TeamPage;