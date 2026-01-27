import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data';

const ProjectsPage = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState(t.projects.categories.all);
  const [searchTerm, setSearchTerm] = useState('');

  // Obtenemos las categorías traducidas desde el context
  const categories = Object.values(t.projects.categories);

  const filteredProjects = projects.filter(p => {
    const currentCategory = p.category[language];
    const translatedAll = t.projects.categories.all;
    
    const matchesFilter = filter === translatedAll || currentCategory === filter;
    
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="section"
      style={{ paddingTop: '140px', background: '#050505', minHeight: '100vh' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#FFF', marginBottom: '20px' }}>
            {t.projects.title}
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>
            {t.projects.subtitle}
          </p>
        </div>

        {/* Buscador y Filtros */}
        <div style={{ marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
            <input 
              type="text" 
              placeholder={t.projects.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '18px 30px',
                width: '100%',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: '0.3s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#BC5FD9'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '12px',
                  border: '1px solid',
                  borderColor: filter === cat ? '#BC5FD9' : 'rgba(255,255,255,0.1)',
                  background: filter === cat ? '#BC5FD9' : 'transparent',
                  color: filter === cat ? 'white' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map(project => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                style={{ 
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '30px' }}>
                  <div style={{ color: '#BC5FD9', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                    {project.category[language]}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#FFF' }}>{project.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {project.description[language]}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.technologies.map(tech => (
                      <span key={tech} style={{ 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        padding: '5px 12px', 
                        borderRadius: '8px', 
                        fontSize: '0.75rem',
                        color: '#FFF',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ color: '#BC5FD9', fontWeight: 600, fontSize: '0.85rem' }}>
                    {project.status[language]}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;