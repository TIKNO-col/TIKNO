import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import LightRays from '../components/LightRays';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'relative', background: '#050505', minHeight: '100vh', overflow: 'hidden' }}
    >
      <SEO 
        title="Inicio" 
        description="TIKNO Studio: Transformamos ideas en experiencias digitales. Desarrollo web, eCommerce y Software a medida en Colombia."
      />
      {/* BACKGROUND GLOBAL - ATMOSFÉRICO */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, 
        pointerEvents: 'none',
      }}>
        
        {/* 1. NÚCLEO DE LUZ (Glow central para dar profundidad) */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '40vh',
          background: 'radial-gradient(circle, rgba(188, 95, 217, 0.25) 0%, rgba(124, 74, 219, 0.1) 40%, transparent 80%)',
          filter: 'blur(80px)',
          zIndex: 1
        }} />

        {/* 2. COMPONENTE LIGHTRAYS CON FILTROS DE INTENSIDAD */}
        <div style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          zIndex: 2,
          opacity: 0.9, // Subimos opacidad para que brille más
          mixBlendMode: 'screen', // Suma luz al fondo negro
          filter: 'brightness(1.8) contrast(1.2)' // Fuerza el brillo de los rayos
        }}>
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={3.5}       // Más energía
            lightSpread={1.8}     // Los rayos cubren más pantalla
            rayLength={15}        // Rayos mucho más largos y potentes
            followMouse={true}
            mouseInfluence={0.7}
            noiseAmount={0.2}     // Un toque de "polvo" en el aire
            distortion={0.3}      // Hace que la luz se vea orgánica
            className="custom-rays"
            pulsating={true}
            fadeDistance={0.4}    // Los rayos penetran más en la oscuridad
            saturation={1}
          />
        </div>

        {/* 3. MASCARA DE VIÑETA (Ajustada para no opacar el centro) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at bottom, transparent 20%, #000000 95%)',
          zIndex: 3
        }} />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
      </div>

      <style>{`
        /* Efecto de partículas sutiles en los rayos */
        .custom-rays {
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
        }
      `}</style>
    </motion.div>
  );
};

export default HomePage;