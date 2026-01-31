import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="footer" style={{ 
      background: 'rgba(5, 5, 5, 0.8)', 
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
      padding: '80px 0 40px' 
    }}>
      <div className="container">
        <div className="footer-content" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px' 
        }}>
          <div className="footer-brand">
            <h3 style={{ 
              color: '#BC5FD9', 
              fontSize: '2rem', 
              fontWeight: 800, 
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              {t.footer.brand}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '15px' }}>
              {t.footer.brandDescription}
            </p>
            <p style={{ color: '#BC5FD9', fontStyle: 'italic', fontSize: '0.9rem' }}>
              {t.footer.brandQuote}
            </p>
          </div>

          <div className="footer-links">
            <h4 style={{ color: '#FFF', marginBottom: '25px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
              {t.footer.links}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{t.footer.inicio}</Link></li>
              <li><Link to="/nosotros" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{language === 'es' ? 'Sobre Nosotros' : 'About Us'}</Link></li>
              <li><Link to="/proyectos" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{t.footer.proyectos}</Link></li>
              <li><Link to="/precios" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{t.pricing.title || t.nav.precios}</Link></li>
              <li><Link to="/equipo" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{t.nav.equipo}</Link></li>
              <li><Link to="/contacto" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{t.footer.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 style={{ color: '#FFF', marginBottom: '25px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>
              {t.footer.contact}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>{t.footer.email}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>{t.footer.phone}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Colombia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ 
          marginTop: '80px', 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '40px' 
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', marginBottom: '10px' }}>
            &copy; {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '10px' }}>
            <Link to="/privacidad" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', textDecoration: 'none' }}>Política de Privacidad</Link>
            <Link to="/terminos" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', textDecoration: 'none' }}>Términos de Servicio</Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
            {t.footer.developedBy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;