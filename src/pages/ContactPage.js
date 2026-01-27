import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
      <div className="container">
        <div style={{ 
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
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1 }}>
              {t.contact.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginBottom: '60px', maxWidth: '500px' }}>
              {t.contact.subtitle}
            </p>

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="contact-icon-box">📍</div>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.5 }}>{t.contact.location}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Colombia</div>
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
                  padding: '20px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '20px',
                  border: '1px solid rgba(37, 211, 102, 0.2)'
                }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#25D366', 
                  borderRadius: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12.004 2C6.48 2 2.004 6.48 2.004 12C2.004 13.76 2.464 15.41 3.264 16.85L2.004 22L7.294 20.71C8.684 21.52 10.294 22 12.004 22C17.524 22 22.004 17.52 22.004 12C22.004 6.48 17.524 2 12.004 2ZM17.114 16.39C16.914 16.95 16.114 17.44 15.554 17.56C15.164 17.67 14.654 17.76 12.944 17.05C10.754 16.14 9.344 13.91 9.234 13.76C9.134 13.61 8.354 12.59 8.354 11.53C8.354 10.47 8.894 9.95 9.124 9.71C9.304 9.5 9.604 9.39 9.894 9.39C9.984 9.39 10.074 9.39 10.154 9.4C10.394 9.41 10.514 9.42 10.674 9.78C10.874 10.26 11.364 11.46 11.424 11.58C11.484 11.7 11.544 11.86 11.464 12.02C11.384 12.18 11.324 12.28 11.204 12.43C11.084 12.58 10.964 12.7 10.844 12.85C10.734 12.98 10.604 13.12 10.754 13.38C10.904 13.63 11.424 14.48 12.194 15.17C13.184 15.86 14.004 16.08 14.284 16.21C14.564 16.34 14.724 16.31 14.924 16.08C15.124 15.85 15.784 15.08 16.014 14.73C16.244 14.38 16.474 14.43 16.784 14.55C17.094 14.67 18.744 15.48 19.084 15.65C19.424 15.82 19.644 15.9 19.734 16.05C19.824 16.2 19.824 16.91 19.624 17.47L17.114 16.39Z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700 }}>WhatsApp</div>
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
