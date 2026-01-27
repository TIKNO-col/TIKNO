export const projects = [
  {
    id: 1,
    title: 'TIKNO Portfolio',
    category: { es: 'Desarrollo Web', en: 'Web Development' },
    technologies: ['React', 'Anime.js', 'CSS3', 'JavaScript', 'HTML5'],
    status: { es: '✅ COMPLETADO', en: '✅ COMPLETED' },
    description: {
      es: 'Una página web moderna y profesional creada con React y Anime.js, diseñada para mostrar proyectos de desarrollo web de manera elegante e interactiva.',
      en: 'A modern and professional website created with React and Anime.js, designed to showcase web development projects in an elegant and interactive way.'
    },
    image: process.env.PUBLIC_URL + '/Tikno.jpg',
    year: '2025',
    features: {
      es: ['Diseño Moderno', 'Animaciones Avanzadas', 'Responsive Design', 'Multiidioma', 'Portfolio Interactivo'],
      en: ['Modern Design', 'Advanced Animations', 'Responsive Design', 'Multilingual', 'Interactive Portfolio']
    },
    liveUrl: 'https://tikno-col.github.io/TIKNO-',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 2,
    title: 'E-commerce TIKNO',
    category: { es: 'E-commerce', en: 'E-commerce' },
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    status: { es: '✅ COMPLETADO', en: '✅ COMPLETED' },
    description: {
      es: 'Plataforma de comercio electrónico completa con gestión de productos, carrito de compras, sistema de pagos y panel de administración.',
      en: 'Complete e-commerce platform with product management, shopping cart, payment system and administration panel.'
    },
    image: process.env.PUBLIC_URL + '/ecommerce1.jpg',
    images: [process.env.PUBLIC_URL + '/ecommerce1.jpg', process.env.PUBLIC_URL + '/ecommerce2.jpg', process.env.PUBLIC_URL + '/ecommerce3.jpg'],
    year: '2025',
    features: {
      es: ['Carrito de compras', 'Sistema de pagos', 'Panel de administración', 'Gestión de inventario', 'Responsive design'],
      en: ['Shopping cart', 'Payment system', 'Administration panel', 'Inventory management', 'Responsive design']
    },
    liveUrl: 'https://ecommerce-tiknowow.vercel.app',
    backendUrl: 'https://ecommerce-tikno-project.onrender.com',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 3,
    title: 'Blythe Dolls Landing',
    category: { es: 'Landing Page', en: 'Landing Page' },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    status: { es: '✅ COMPLETADO', en: '✅ COMPLETED' },
    description: {
      es: 'Landing page moderna y elegante para Blythe Dolls, una tienda especializada en muñecas únicas y personalizadas.',
      en: 'Modern and elegant landing page for Blythe Dolls, a store specialized in unique and personalized dolls.'
    },
    image: process.env.PUBLIC_URL + '/landingpage.jpg',
    year: '2025',
    features: {
      es: ['Experiencia visual atractiva', 'Galería de productos', 'Newsletter subscription', 'Diseño responsivo', 'Muñecas personalizadas'],
      en: ['Attractive visual experience', 'Product gallery', 'Newsletter subscription', 'Responsive design', 'Personalized dolls']
    },
    liveUrl: 'https://landing-blythe-tikno.vercel.app',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 4,
    title: 'ERP TIKNO',
    category: { es: 'Aplicación web de administración', en: 'Admin Web Application' },
    technologies: ['React', 'Django', 'PostgreSQL', 'JWT', 'tailwind'],
    status: { es: '✅ COMPLETADO', en: '✅ COMPLETED' },
    description: {
      es: 'ERP TIKNO es una aplicación web de administración de recursos empresariales que permite a las empresas gestionar sus operaciones de manera eficiente.',
      en: 'ERP TIKNO is a business resource management web application that allows companies to manage their operations efficiently.'
    },
    image: process.env.PUBLIC_URL + '/erp.jpg',
    year: '2025',
    features: {
      es: ['Gestión de inventario', 'Compras y ventas', 'Pagos y facturación', 'Reportes y análisis', 'Seguridad y control de acceso'],
      en: ['Inventory management', 'Purchases and sales', 'Payments and billing', 'Reports and analysis', 'Security and access control']
    },
    liveUrl: 'https://erptikno-flame.vercel.app/',
    backendUrl: 'https://erp-tikno.onrender.com',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 5,
    title: 'Próximo Proyecto',
    category: { es: 'En Desarrollo', en: 'In Development' },
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    status: { es: '🚧 EN DESARROLLO', en: '🚧 IN DEVELOPMENT' },
    description: {
      es: 'Nuevo proyecto en desarrollo que incorporará las últimas tecnologías y mejores prácticas de desarrollo web.',
      en: 'New project in development that will incorporate the latest technologies and best practices in web development.'
    },
    image: process.env.PUBLIC_URL + '/logoTIKNO.jpg',
    year: '2025',
    features: {
      es: ['Próximamente', 'Tecnologías modernas', 'Mejores prácticas', 'Innovación'],
      en: ['Coming soon', 'Modern technologies', 'Best practices', 'Innovation']
    },
    liveUrl: '#',
    githubUrl: 'https://github.com/TIKNO-col'
  }
];

export const pricingPlans = [
  {
    name: { es: 'Presencia digital', en: 'Digital Presence' },
    price: { es: '$700.000 COP', en: '$179 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/precensia.png',
    description: {
      es: 'Tu negocio online con presencia profesional lista para crecer.',
      en: 'Your online business with professional presence ready to grow.'
    },
    features: {
      es: ['Landing page profesional', 'Diseño 100% responsive', '5 páginas incluidas', 'WhatsApp Business', 'Formulario de contacto', 'Hosting y dominio 1 año'],
      en: ['Professional landing page', '100% responsive design', '5 pages included', 'WhatsApp Business', 'Contact form', 'Hosting and domain for 1 year']
    }
  },
  {
    name: { es: 'Vende En Línea', en: 'Sell Online' },
    price: { es: '$2.700.000 COP', en: '$691 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/tienda-online.png',
    popular: true,
    description: {
      es: 'E-commerce completo llave en mano para tu negocio.',
      en: 'Complete turnkey e-commerce for your business.'
    },
    features: {
      es: ['Tienda online completa', 'Panel de administración', 'Pasarelas de pago', 'Catálogo variable', 'Capacitación incluida', 'Soporte 24/7'],
      en: ['Complete online store', 'Admin panel', 'Payment gateways', 'Variable catalog', 'Training included', '24/7 Support']
    }
  },
  {
    name: { es: 'Solución a Medida', en: 'Custom Solution' },
    price: { es: '$4.000.000 COP', en: '$1,024 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/medida.png',
    description: {
      es: 'Software personalizado para necesidades específicas y complejas.',
      en: 'Custom software for specific and complex needs.'
    },
    features: {
      es: ['Aplicación web robusta', 'Base de Datos optimizada', 'API REST documentada', 'Dashboard avanzado', '90 días de garantía', 'Documentación técnica'],
      en: ['Robust web application', 'Optimized Database', 'REST API', 'Advanced Dashboard', '90 days warranty', 'Technical documentation']
    }
  }
];

export const pricingPlansExpress = [
  {
    name: { es: 'Express Wordpress', en: 'Express WordPress' },
    price: { es: '$626.700 COP', en: '$160 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/wordpress.png',
    description: { es: 'Página express en WordPress rápida.', en: 'Fast express WordPress page.' },
    features: {
      es: ['Instalación y configuración', 'Plantilla premium', '5 páginas', 'Hosting y dominio 1 año'],
      en: ['Installation and setup', 'Premium template', '5 pages', 'Hosting and domain for 1 year']
    }
  },
  {
    name: { es: 'Express Shopify', en: 'Express Shopify' },
    price: { es: '$900.000 COP', en: '$230 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/social.png',
    description: { es: 'Tienda en Shopify rápida y funcional.', en: 'Fast and functional Shopify store.' },
    features: {
      es: ['Configuración Shopify', 'Diseño personalizado', 'Carga de 30 productos', 'Hosting y dominio 1 año'],
      en: ['Shopify setup', 'Custom design', '30 products upload', 'Hosting and domain for 1 year']
    }
  },
  {
    name: { es: 'Express Astro', en: 'Express Astro' },
    price: { es: '$600.000 COP', en: '$154 USD' },
    icon: process.env.PUBLIC_URL + '/ICONS/Astro.png',
    description: { es: 'Sitio web estático ultra rápido.', en: 'Ultra fast static website.' },
    features: {
      es: ['Desarrollo Astro', 'SEO optimizado', 'Velocidad máxima', 'Hosting y dominio 1 año'],
      en: ['Astro development', 'Optimized SEO', 'Maximum speed', 'Hosting and domain for 1 year']
    }
  }
];

export const teamMembers = [
  {
    name: 'Nicolas Moreno',
    role: { es: 'Co-Fundador & Desarrollador Backend', en: 'Co-Founder & Backend Developer' },
    skills: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Django', 'Laravel'],
    avatar: '👨‍💻',
    description: {
      es: 'Especialista en desarrollo backend, con experiencia en frameworks como Django, Laravel y Node.js.',
      en: 'Backend development specialist, with experience in frameworks like Django, Laravel and Node.js.'
    }
  },
  {
    name: 'Esteban Lozano',
    role: { es: 'Co-Fundador & Full Stack Developer', en: 'Co-Founder & Full Stack Developer' },
    skills: ['Python', 'PostgreSQL', 'Docker', 'SQL', 'React', 'Java'],
    avatar: '👨‍💻',
    description: {
      es: 'Desarrollador full stack con experiencia en bases de datos e infraestructura cloud.',
      en: 'Full stack developer with experience in databases and cloud infrastructure.'
    }
  },
  {
    name: 'Tikno AI',
    role: { es: 'Asistente de IA & Optimización', en: 'AI Assistant & Optimization' },
    skills: ['Deep Learning', 'NLP', 'Automation', 'Code Review'],
    avatar: '🤖',
    description: {
      es: 'Nuestro núcleo de inteligencia artificial que potencia el flujo de trabajo y la calidad del código.',
      en: 'Our core artificial intelligence that powers the workflow and code quality.'
    }
  }
];

export const translations = {
  es: {
    nav: {
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      tecnologias: 'Tecnologías',
      precios: 'Precios',
      equipo: 'Equipo',
      contacto: 'Contacto'
    },
    hero: {
      greeting: 'Hola, somos',
      studio: 'Studio',
      mission: 'Creamos experiencias digitales que transforman ideas en realidad.',
      btnProjects: 'Ver Proyectos',
      btnContact: 'Contactar',
      scroll: 'Scroll'
    },
    projects: {
      title: 'Nuestros Proyectos',
      subtitle: 'Descubre las soluciones innovadoras que hemos desarrollado para nuestros clientes',
      searchPlaceholder: 'Buscar proyectos...',
      categories: {
        all: 'Todos',
        web: 'Desarrollo Web',
        ecommerce: 'E-commerce',
        landing: 'Landing Page',
        admin: 'Aplicación web de administración',
        development: 'En Desarrollo'
      }
    },
    pricing: {
      title: 'Planes y Precios',
      subtitle: 'Soluciones accesibles adaptadas a tu presupuesto y necesidades',
      titleExpress: 'Planes Express',
      subtitleExpress: 'Mitad de precio - Mitad de tiempo',
      requestQuote: 'Solicitar Cotización',
      popular: 'Más Popular',
      features: 'Características incluidas'
    },
    team: {
      title: 'Nuestro Equipo',
      subtitle: 'Conoce a los fundadores de TIKNO, apasionados por la tecnología y la innovación'
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes un proyecto en mente? Hablemos y hagamos realidad tu idea',
      info: 'Información de Contacto',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu email',
      subjectPlaceholder: 'Asunto',
      messagePlaceholder: 'Tu mensaje',
      sendButton: 'Enviar Mensaje',
      sending: 'Enviando...', 
      successMessage: '¡Mensaje enviado correctamente!',
      errorMessage: 'Error al enviar el mensaje. Inténtalo de nuevo.',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      country: 'Colombia',
      whatsappOption: 'O contáctanos por WhatsApp'
    },
    whatsapp: {
      message: 'Hola TIKNO! Estoy interesado en un proyecto de software...'
    },
    footer: {
      brand: 'TIKNO',
      brandDescription: 'Innovación cercana, software a tu alcance',
      brandQuote: '"Hacemos simple lo digital"',
      links: 'Enlaces',
      contact: 'Contacto',
      inicio: 'Inicio',
      proyectos: 'Proyectos',
      tecnologias: 'Tecnologías',
      precios: 'Precios',
      email: 'nm5571762@gmail.com',
      phone: '+57 (350) 232-8517',
      rights: 'Todos los derechos reservados.',
      developedBy: 'Desarrollado por Nicolas Moreno & Esteban Lozano'
    }
  },
  en: {
    nav: {
      inicio: 'Home',
      proyectos: 'Projects',
      tecnologias: 'Technologies',
      precios: 'Pricing',
      equipo: 'Team',
      contacto: 'Contact'
    },
    hero: {
      greeting: 'Hello, we are',
      studio: 'Studio',
      mission: 'We create digital experiences that transform ideas into reality.',
      btnProjects: 'View Projects',
      btnContact: 'Contact',
      scroll: 'Scroll'
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Discover the innovative solutions we have developed for our clients',
      searchPlaceholder: 'Search projects...', 
      categories: {
        all: 'All',
        web: 'Web Development',
        ecommerce: 'E-commerce',
        landing: 'Landing Page',
        admin: 'Admin Web Application',
        development: 'In Development'
      }
    },
    pricing: {
      title: 'Plans and Pricing',
      titleExpress: 'Express Plans',
      subtitle: 'Accessible solutions tailored to your budget and needs',
      subtitleExpress: 'Half price - Half time',
      requestQuote: 'Request Quote',
      popular: 'Most Popular',
      features: 'Included features'
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet TIKNO\'s founders, passionate about technology and innovation'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Do you have a project in mind? Let\'s talk and make your idea a reality',
      info: 'Contact Information',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your message',
      sendButton: 'Send Message',
      sending: 'Sending...', 
      successMessage: 'Message sent successfully!',
      errorMessage: 'Error sending message. Please try again.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      country: 'Colombia',
      whatsappOption: 'Or contact us via WhatsApp'
    },
    whatsapp: {
      message: 'Hello TIKNO! I am interested in a software project...'
    },
    footer: {
      brand: 'TIKNO',
      brandDescription: 'Close innovation, software within your reach',
      brandQuote: '"We make digital simple"',
      links: 'Links',
      contact: 'Contact',
      inicio: 'Home',
      proyectos: 'Projects',
      tecnologias: 'Technologies',
      precios: 'Pricing',
      email: 'nm5571762@gmail.com',
      phone: '+57 (350) 232-8517',
      rights: 'All rights reserved.',
      developedBy: 'Developed by Nicolas Moreno & Esteban Lozano'
    }
  }
};