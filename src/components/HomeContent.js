import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  const { language, t } = useLanguage();

  const content = {
    es: {
      title: 'Expertos en Desarrollo de Software en Colombia',
      description: 'En TIKNO Studio, no solo creamos sitios web; construimos soluciones digitales de alto rendimiento que impulsan el crecimiento de tu negocio. Nuestro equipo combina diseño premium con tecnología de vanguardia para ofrecer experiencias de usuario excepcionales.',
      services: [
        {
          title: 'Desarrollo Web a Medida',
          text: 'Creamos aplicaciones web escalables y robustas utilizando React, Node.js y las últimas tecnologías del mercado. Cada línea de código está optimizada para la velocidad y el SEO.'
        },
        {
          title: 'E-commerce Profesional',
          text: 'Transformamos tu negocio físico en una máquina de ventas online. Especialistas en Shopify, WooCommerce y plataformas personalizadas con pasarelas de pago seguras.'
        },
        {
          title: 'Diseño UI/UX Premium',
          text: 'La estética es parte de nuestro ADN. Diseñamos interfaces intuitivas y visualmente impactantes que capturan la esencia de tu marca y convierten visitantes en clientes.'
        }
      ],
      vision: 'Nuestra misión es democratizar el acceso a software de élite, permitiendo que empresas de todos los tamaños compitan en el mercado global con herramientas digitales de clase mundial.',
      cta: '¿Listo para empezar?',
      ctaBtn: 'Inicia tu proyecto'
    },
    en: {
      title: 'Experts in Software Development in Colombia',
      description: 'At TIKNO Studio, we don\'t just create websites; we build high-performance digital solutions that drive your business growth. Our team combines premium design with cutting-edge technology to deliver exceptional user experiences.',
      services: [
        {
          title: 'Custom Web Development',
          text: 'We create scalable and robust web applications using React, Node.js, and the latest technologies. Every line of code is optimized for speed and SEO.'
        },
        {
          title: 'Professional E-commerce',
          text: 'We transform your physical business into an online sales machine. Specialists in Shopify, WooCommerce, and custom platforms with secure payment gateways.'
        },
        {
          title: 'Premium UI/UX Design',
          text: 'Aesthetics is part of our DNA. We design intuitive and visually stunning interfaces that capture the essence of your brand and convert visitors into customers.'
        }
      ],
      vision: 'Our mission is to democratize access to elite software, allowing companies of all sizes to compete in the global market with world-class digital tools.',
      cta: 'Ready to start?',
      ctaBtn: 'Start your project'
    }
  };

  const c = content[language];

  return (
    <section className="home-seo-content" style={{ 
      padding: '100px 0', 
      background: '#050505', 
      color: '#FFF',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #BC5FD9, #FFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>
            {c.title}
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '60px'
          }}>
            {c.description} Utilizamos tecnologías de vanguardia como <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: '#BC5FD9', textDecoration: 'none', borderBottom: '1px solid #BC5FD9' }}>React</a> para garantizar la mejor experiencia.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px',
          marginBottom: '60px'
        }}>
          {c.services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                padding: '30px',
                borderRadius: '15px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <h3 style={{ color: '#BC5FD9', marginBottom: '15px' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{service.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            padding: '60px 40px',
            background: 'linear-gradient(to right, rgba(188, 95, 217, 0.05), rgba(5, 5, 5, 0.05))',
            borderRadius: '20px',
            border: '1px solid rgba(188, 95, 217, 0.1)',
            marginTop: '40px'
          }}
        >
          <h3 style={{ marginBottom: '20px', fontSize: '1.8rem' }}>{c.cta}</h3>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contacto" className="btn-tikno-new" style={{ textDecoration: 'none' }}>
              {c.ctaBtn}
            </Link>
            <Link to="/proyectos" className="btn-tikno-ghost" style={{ textDecoration: 'none' }}>
              {t.hero.btnProjects}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            padding: '40px',
            marginTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>
            {c.vision}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContent;
