import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data';
import emailjs from '@emailjs/browser';
import ProfileCard from '../components/ProfileCard';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Efecto para pre-llenar el formulario si viene de Pricing
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planName = params.get('plan');
    if (planName) {
      setFormData(prev => ({
        ...prev,
        title: `${t.contact.quoteSubject}: ${planName}`,
        message: `${t.contact.quoteMessage} ${planName}.\n\n`
      }));
    }
  }, [location.search, t.contact.quoteSubject, t.contact.quoteMessage]);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.message) {
      setSubmitMessage('error_fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: new Date().toLocaleString()
        }
      );
      setSubmitMessage('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitMessage('error_server');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const whatsappUrl = `https://wa.me/573112441684?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <div style={{ padding: '140px 0 100px', minHeight: '100vh', background: '#050505', color: 'white' }}>
      <SEO 
        title="Contacto | Hablemos de tu Próximo Proyecto" 
        description="¿Tienes una idea? Nosotros la hacemos realidad. Contáctanos para asesoría personalizada en desarrollo de software y estrategia digital."
        url="/contacto"
      />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '20px' }}
          >
            {t.contact.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div id="contact-form-section" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px' }}>
              {t.contact.info}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="contact-icon-box">📧</div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5 }}>Email</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>nm5571762@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="contact-icon-box">📱</div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5 }}>{t.contact.phone}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>+57 (350) 232-8517</div>
                </div>
              </div>
              
              {/* WhatsApp Link directly in info side */}
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  textDecoration: 'none', 
                  color: 'inherit',
                  marginTop: '20px',
                  padding: '25px',
                  background: 'rgba(37, 211, 102, 0.05)',
                  borderRadius: '24px',
                  border: '1px solid rgba(37, 211, 102, 0.1)'
                }}
              >
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '18px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img src={process.env.PUBLIC_URL + '/ICONS/whatsapp.png'} alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#25D366' }}>WhatsApp Direct</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{t.contact.whatsappOption}</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              padding: '50px',
              borderRadius: '32px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder={t.contact.namePlaceholder} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder={t.contact.emailPlaceholder} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder={t.contact.subjectPlaceholder} 
                  required 
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder={t.contact.messagePlaceholder} 
                  rows="5" 
                  required 
                />
              </div>

              {submitMessage === 'success' && (
                <div style={{ color: '#4CAF50', fontWeight: 600 }}>{t.contact.successMessage}</div>
              )}
              {submitMessage === 'error_fields' && (
                <div style={{ color: '#F44336', fontWeight: 600 }}>
                  {language === 'es' ? 'Por favor completa todos los campos.' : 'Please fill out all fields.'}
                </div>
              )}
              {submitMessage === 'error_server' && (
                <div style={{ color: '#F44336', fontWeight: 600 }}>{t.contact.errorMessage}</div>
              )}

              <button 
                type="submit" 
                className="btn-tikno-new" 
                disabled={isSubmitting}
                style={{ width: '100%', padding: '20px' }}
              >
                {isSubmitting ? t.contact.sending : t.contact.sendButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-icon-box {
          width: 60px;
          height: 60px;
          background: rgba(188, 95, 217, 0.1);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #BC5FD9;
          border: 1px solid rgba(188, 95, 217, 0.2);
        }

        .input-group input, .input-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 18px 25px;
          border-radius: 16px;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
          box-sizing: border-box;
        }

        .input-group input:focus, .input-group textarea:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #BC5FD9;
          box-shadow: 0 0 20px rgba(188, 95, 217, 0.15);
        }

        .btn-tikno-new {
          background: #BC5FD9;
          color: white;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
        }
        .btn-tikno-new:hover:not(:disabled) { 
          background: #a348c0; 
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(188, 95, 217, 0.3);
        }
        .btn-tikno-new:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>
    </div>
  );
};

export default ContactPage;