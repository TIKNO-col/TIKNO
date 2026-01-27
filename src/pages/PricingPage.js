import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { pricingPlans, pricingPlansExpress } from '../data';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const renderPlans = (plans) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '30px',
      marginTop: '40px',
      padding: '0 20px'
    }}>
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -15, transition: { duration: 0.3 } }}
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '32px',
            padding: '50px 40px',
            border: plan.popular ? '2px solid #BC5FD9' : '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: plan.popular ? '0 25px 50px rgba(188, 95, 217, 0.15)' : '0 20px 40px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }}
        >
          {plan.popular && (
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-35px',
              background: '#BC5FD9',
              color: 'white',
              padding: '8px 40px',
              transform: 'rotate(45deg)',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }}>
              {t.pricing.popular}
            </div>
          )}

          <div style={{ marginBottom: 'auto' }}>
            <div style={{ 
              fontSize: '3.5rem', 
              marginBottom: '25px',
              background: 'rgba(188, 95, 217, 0.1)',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              border: '1px solid rgba(188, 95, 217, 0.2)'
            }}>
              {typeof plan.icon === 'string' && (plan.icon.includes('/ICONS/') || plan.icon.startsWith('http')) ? (
                <img src={plan.icon} alt={plan.name[language]} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              ) : (
                plan.icon
              )}
            </div>
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '15px', color: '#FFF' }}>
              {plan.name[language]}
            </h3>
            
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px', lineHeight: 1.6, fontSize: '1rem' }}>
              {plan.description[language]}
            </p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '40px' }}>
              <span style={{ fontSize: '2.8rem', fontWeight: 900, color: '#BC5FD9' }}>
                {plan.price[language].split(' ')[0]}
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                {plan.price[language].split(' ')[1]}
              </span>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontSize: '0.85rem', color: '#FFF', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>
                {t.pricing.features}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {plan.features[language].map((feature, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ 
                      width: '20px', 
                      height: '20px', 
                      background: 'rgba(188, 95, 217, 0.2)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      color: '#BC5FD9'
                    }}>✓</span> 
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/contacto" className="btn-tikno-pricing">
            {t.pricing.requestQuote}
          </Link>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '140px 0 100px', minHeight: '100vh', background: '#050505', color: 'white' }}>
      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h1 
            variants={cardVariants}
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: '25px', letterSpacing: '-2px' }}
          >
            {t.pricing.title}
          </motion.h1>
          <motion.p 
            variants={cardVariants}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {renderPlans(pricingPlans)}

        <div style={{ textAlign: 'center', marginTop: '140px', marginBottom: '60px' }}>
          <motion.h2 
            variants={cardVariants}
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #BC5FD9, #FFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t.pricing.titleExpress}
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}
          >
            {t.pricing.subtitleExpress}
          </motion.p>
        </div>

        {renderPlans(pricingPlansExpress)}
      </motion.div>

      <style>{`
        .btn-tikno-pricing {
          background: #BC5FD9;
          color: white;
          padding: 20px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
          text-align: center;
          transition: 0.3s;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 10px 20px rgba(188, 95, 217, 0.2);
        }
        .btn-tikno-pricing:hover { 
          background: #a348c0; 
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(188, 95, 217, 0.4);
        }
      `}</style>
    </div>
  );
};

export default PricingPage;