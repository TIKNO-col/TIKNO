import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();

  return (
    <div style={{ padding: '140px 0 100px', minHeight: '100vh', background: '#050505', color: 'white' }}>
      <SEO 
        title={language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'} 
        description="Política de privacidad de TIKNO Studio. Detalles sobre el tratamiento de datos y protección de información."
        url="/privacidad"
      />
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '40px' }}
        >
          {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
        </motion.h1>
        
        <div style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p>Última actualización: 30 de enero de 2026</p>
          
          <section style={{ marginTop: '30px' }}>
            <h2>1. Recopilación de Información</h2>
            <p>
              En TIKNO, valoramos tu privacidad. Solo recopilamos información personal básica (nombre y correo electrónico) 
              a través de nuestro formulario de contacto para responder a tus consultas.
            </p>
          </section>

          <section style={{ marginTop: '30px' }}>
            <h2>2. Uso de Datos</h2>
            <p>
              Tus datos se utilizan exclusivamente para la comunicación comercial relacionada con los servicios 
              de desarrollo de software solicitados. No compartimos tu información con terceros.
            </p>
          </section>

          <section style={{ marginTop: '30px' }}>
            <h2>3. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad técnicas para proteger tu información contra acceso no autorizado 
              o divulgación.
            </p>
          </section>

          <section style={{ marginTop: '30px' }}>
            <h2>4. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, puedes escribirnos a contacto@tikno.pro.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
