import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = '573112441684';
  const message = t.whatsapp.message;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        textDecoration: 'none',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}
    >
      <img 
        src={process.env.PUBLIC_URL + '/ICONS/whatsapp.png'} 
        alt="WhatsApp" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </motion.a>
  );
};

export default WhatsAppButton;