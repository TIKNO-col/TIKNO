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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        textDecoration: 'none',
        fontSize: '2rem'
      }}
    >
      <svg 
        width="35" 
        height="35" 
        viewBox="0 0 24 24" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.004 2C6.48 2 2.004 6.48 2.004 12C2.004 13.76 2.464 15.41 3.264 16.85L2.004 22L7.294 20.71C8.684 21.52 10.294 22 12.004 22C17.524 22 22.004 17.52 22.004 12C22.004 6.48 17.524 2 12.004 2ZM17.114 16.39C16.914 16.95 16.114 17.44 15.554 17.56C15.164 17.67 14.654 17.76 12.944 17.05C10.754 16.14 9.344 13.91 9.234 13.76C9.134 13.61 8.354 12.59 8.354 11.53C8.354 10.47 8.894 9.95 9.124 9.71C9.304 9.5 9.604 9.39 9.894 9.39C9.984 9.39 10.074 9.39 10.154 9.4C10.394 9.41 10.514 9.42 10.674 9.78C10.874 10.26 11.364 11.46 11.424 11.58C11.484 11.7 11.544 11.86 11.464 12.02C11.384 12.18 11.324 12.28 11.204 12.43C11.084 12.58 10.964 12.7 10.844 12.85C10.734 12.98 10.604 13.12 10.754 13.38C10.904 13.63 11.424 14.48 12.194 15.17C13.184 15.86 14.004 16.08 14.284 16.21C14.564 16.34 14.724 16.31 14.924 16.08C15.124 15.85 15.784 15.08 16.014 14.73C16.244 14.38 16.474 14.43 16.784 14.55C17.094 14.67 18.744 15.48 19.084 15.65C19.424 15.82 19.644 15.9 19.734 16.05C19.824 16.2 19.824 16.91 19.624 17.47L17.114 16.39Z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
