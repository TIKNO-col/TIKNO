import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../servicesData';
import SEO from '../components/SEO';

const ServiceTemplate = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/proyectos" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title[language],
    "provider": {
      "@type": "Organization",
      "name": "TIKNO",
      "url": "https://tikno.pro"
    },
    "description": service.description[language],
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title[language],
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature[language]
        }
      }))
    }
  };

  return (
    <div style={{ padding: '140px 0 100px', minHeight: '100vh', background: '#050505', color: 'white' }}>
      <SEO 
        title={service.title[language]} 
        description={service.description[language]}
        keywords={service.keywords}
        url={`/servicios/${slug}`}
        serviceSchema={serviceSchema}
      />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '30px', background: 'linear-gradient(135deg, #FFF, #BC5FD9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {service.title[language]}
          </h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            {service.description[language]}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          {service.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                background: 'rgba(255,255,255,0.03)', 
                backdropFilter: 'blur(10px)', 
                padding: '40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(188, 95, 217, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#BC5FD9', fontSize: '1.2rem' }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>{feature[language]}</h3>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contacto')}
            style={{
              background: '#BC5FD9',
              color: 'white',
              padding: '20px 50px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(188, 95, 217, 0.3)'
            }}
          >
            {language === 'es' ? 'Cotizar Servicio' : 'Get a Quote'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
