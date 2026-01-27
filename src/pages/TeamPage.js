import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { teamMembers } from '../data';

const TeamPage = () => {
  const { t, language } = useLanguage();

  return (
    <div style={{ padding: '120px 0 100px', minHeight: '100vh', background: '#050505' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px' }}
          >
            {t.team.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}
          >
            {t.team.subtitle}
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          padding: '0 20px'
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(20px)',
                borderRadius: '32px',
                padding: '50px 40px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '30px', 
                background: 'rgba(188, 95, 217, 0.1)',
                width: '120px',
                height: '120px',
                lineHeight: '120px',
                borderRadius: '50%',
                margin: '0 auto 30px',
                border: '1px solid rgba(188, 95, 217, 0.2)'
              }}>
                {member.avatar}
              </div>

              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '10px' }}>{member.name}</h3>
              <div style={{ 
                color: '#BC5FD9', 
                fontWeight: 700, 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                marginBottom: '20px'
              }}>
                {member.role[language]}
              </div>

              <p style={{ 
                color: 'rgba(255,255,255,0.6)', 
                lineHeight: 1.6, 
                marginBottom: '30px',
                fontSize: '1rem'
              }}>
                {member.description[language]}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {member.skills.map((skill, i) => (
                  <span key={i} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: '#FFF',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
