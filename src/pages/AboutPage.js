import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { language, t } = useLanguage();

  return (
    <div style={{ padding: '140px 0 100px', minHeight: '100vh', background: '#050505', color: 'white' }}>
      <SEO 
        title={language === 'es' ? 'Sobre Nosotros | Nuestra Historia' : 'About Us | Our Story'} 
        description="Conoce la misión y visión de TIKNO Studio. Expertos en ingeniería de software dedicados a transformar el panorama digital en Colombia."
        url="/nosotros"
      />
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '40px' }}
          >
            {language === 'es' ? 'Ingeniería con Propósito' : 'Engineering with Purpose'}
          </motion.h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginBottom: '80px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 style={{ color: '#BC5FD9', marginBottom: '20px' }}>{language === 'es' ? 'Nuestra Misión' : 'Our Mission'}</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {language === 'es' 
                  ? 'Democratizar el acceso a software de élite. Creemos que la tecnología de punta no debe ser exclusiva de las grandes corporaciones, sino una herramienta de crecimiento para todo negocio con visión.'
                  : 'To democratize access to elite software. We believe that cutting-edge technology should not be exclusive to large corporations, but a growth tool for every visionary business.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 style={{ color: '#BC5FD9', marginBottom: '20px' }}>{language === 'es' ? 'Nuestra Visión' : 'Our Vision'}</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {language === 'es'
                  ? 'Convertirnos en el estudio de software referente en Latinoamérica, destacando por una estética impecable y una ejecución técnica sin compromisos.'
                  : 'To become the benchmark software studio in Latin America, standing out for impeccable aesthetics and uncompromising technical execution.'}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ padding: '60px', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <h2 style={{ marginBottom: '30px' }}>{language === 'es' ? '¿Por qué TIKNO?' : 'Why TIKNO?'}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px' }}>
              {language === 'es'
                ? 'Nacimos de la necesidad de cerrar la brecha entre el diseño premium y el desarrollo robusto. En TIKNO, cada proyecto es tratado como una obra de ingeniería artesanal, optimizada para el rendimiento real y la conversión de usuarios.'
                : 'We were born from the need to bridge the gap between premium design and robust development. At TIKNO, every project is treated as a piece of handcrafted engineering, optimized for real performance and user conversion.'}
            </p>
            <Link to="/equipo" style={{ color: '#BC5FD9', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #BC5FD9', paddingBottom: '5px' }}>
              {language === 'es' ? 'Conoce al equipo técnico' : 'Meet the technical team'} →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
