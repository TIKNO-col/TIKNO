import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ServiceTemplate from './pages/ServiceTemplate';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

// Componente interno para manejar la lógica condicional del Footer
const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="App" style={{ background: '#050505', color: 'white' }}>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/precios" element={<PricingPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/privacidad" element={<PrivacyPolicyPage />} />
          <Route path="/servicios/:slug" element={<ServiceTemplate />} />
        </Routes>
      </main>
      {/* Solo mostramos el footer si NO estamos en el home */}
      {!isHome && <Footer />}
      {/* Botón flotante de WhatsApp global */}
      <WhatsAppButton />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga profesional
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen" style={{ background: '#0F0814' }}>
        <div className="loading-content">
          <h1 style={{ 
            fontSize: '4rem', 
            background: 'linear-gradient(135deg, var(--color-purple-vibrant), var(--color-lila-bright))',
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent'
          }}>
            TIKNO
          </h1>
          <div className="loading-spinner" style={{ borderTopColor: 'var(--color-lila-bright)' }}></div>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
