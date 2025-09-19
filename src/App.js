import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import emailjs from '@emailjs/browser';
import './App.css';
function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState(() => {
    return localStorage.getItem('tikno-project-filter') || 'Todos';
  });
  const [projectSearch, setProjectSearch] = useState(() => {
    return localStorage.getItem('tikno-project-search') || '';
  });
  const [projectSort, setProjectSort] = useState(() => {
    return localStorage.getItem('tikno-project-sort') || 'newest';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');
  const [language, setLanguage] = useState('es');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const heroRef = useRef(null);

  
const translations = {
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
        backendNotice: {
          title: 'Importante: Activación de Servicios Backend',
          description: 'Para el correcto funcionamiento del ERP y eCommerce, es necesario activar primero los backends:',
          activateERP: 'Activar ERP Backend',
          activateEcommerce: 'Activar eCommerce Backend',
          note: 'Los servicios se suspenden cada 15 minutos en Render (plan gratuito)',
        },
        sort: {
          newest: 'Más recientes',
          oldest: 'Más antiguos',
          alphabetical: 'Alfabético'
        },
        clear: 'Limpiar',
        searchPlaceholder: 'Buscar proyectos por nombre, descripción o tecnología...',
        searchAriaLabel: 'Buscar proyectos',
        showing: 'Mostrando',
        of: 'de',
        projects: 'proyecto',
        projectsPlural: 'proyectos',
        for: 'para',
        noResults: 'No se encontraron proyectos que coincidan con tu búsqueda.',
        viewProject: 'Ver Proyecto',
        viewLive: 'Ver en vivo',
        viewCode: 'Ver código',
        categories: {
          all: 'Todos',
          web: 'Desarrollo Web',
          ecommerce: 'E-commerce',
          landing: 'Landing Page',
          admin: 'Aplicacion web de administracion',
          development: 'En Desarrollo'
        }
      },
      technologies: {
        title: 'Tecnologías & Expertise',
        subtitle: 'Utilizamos las tecnologías más modernas y confiables del mercado'
      },
      pricing: {
        title: 'Planes y Precios',
        subtitle: 'Soluciones accesibles adaptadas a tu presupuesto y necesidades',
        titleExpress: 'Planes Express',
        subtitleExpress: 'Mitad de precio - Mitad de tiempo',
        requestQuote: 'Solicitar Cotización',
        popular: 'Más Popular'
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
        country: 'Colombia'
      },
      footer: {
        brand: 'TIKNO',
        brandDescription: language === 'es' ? 'Innovación cercana, software a tu alcance' : 'Close innovation, software within your reach',
        brandQuote: language === 'es' ? '"Hacemos simple lo digital"' : '"We make digital simple"',
        links: language === 'es' ? 'Enlaces' : 'Links',
        contact: language === 'es' ? 'Contacto' : 'Contact',
        inicio: language === 'es' ? 'Inicio' : 'Home',
        proyectos: language === 'es' ? 'Proyectos' : 'Projects',
        tecnologias: language === 'es' ? 'Tecnologías' : 'Technologies',
        precios: language === 'es' ? 'Precios' : 'Pricing',
        email: 'nm5571762@gmail.com',
        phone: '+57 (350) 232-8517',
        rights: language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.',
        developedBy: language === 'es' ? 'Desarrollado por Nicolas Moreno & Esteban Lozano' : 'Developed by Nicolas Moreno & Esteban Lozano'
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
        backendNotice: {
          title: 'Important: Backend Services Activation',
          description: 'For proper functioning of ERP and eCommerce, backends must be activated first:',
          activateERP: 'Activate ERP Backend',
          activateEcommerce: 'Activate eCommerce Backend',
          note: 'Services suspend every 15 minutes on Render (free plan)'
        },
        searchPlaceholder: 'Search projects by name, description or technology...',
        searchAriaLabel: 'Search projects',
        sort: {
          newest: 'Newest',
          oldest: 'Oldest',
          alphabetical: 'Alphabetical'
        },
        clear: 'Clear',
        showing: 'Showing',
        of: 'of',
        projects: 'project',
        projectsPlural: 'projects',
        for: 'for',
        noResults: 'No projects found matching your search.',
        viewProject: 'View Project',
        viewLive: 'View Live',
        viewCode: 'View Code',
        categories: {
          all: 'All',
          web: 'Web Development',
          ecommerce: 'E-commerce',
          landing: 'Landing Page',
          admin: 'Admin Web Application',
          development: 'In Development'
        }
      },
      technologies: {
        title: 'Technologies & Expertise',
        subtitle: 'We use the most modern and reliable technologies on the market'
      },
      pricing: {
        title: 'Plans and Pricing',
        titleExpress: 'Express Plans',
        subtitle: 'Accessible solutions tailored to your budget and needs',
        subtitleExpress: 'Half price - Half time',
        requestQuote: 'Request Quote',
        popular: 'Most Popular'
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
        country: 'Colombia'
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

  const t = translations[language];
  const projectsRef = useRef(null);
  // Referencias del cursor eliminadas

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_dsc3mv6';
  const EMAILJS_TEMPLATE_ID = 'template_13ce9d7';
  const EMAILJS_PUBLIC_KEY = 'KGXORJXBD5OISg81s'; // Necesitarás añadir tu clave pública

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Email sending function
   const sendEmail = async (formData) => {
     try {
       // Verificar que las variables de entorno estén disponibles
       if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
         console.error('EmailJS configuration missing');
         return { success: false, message: 'Error de configuración. Por favor contacta al administrador.' };
       }
       
       const currentTime = new Date().toLocaleString('es-ES', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
         hour: '2-digit',
         minute: '2-digit'
       });
       
       const templateParams = {
         name: formData.name,
         email: formData.email,
         title: formData.title,
         message: formData.message,
         time: currentTime,
       };
       
       console.log('Sending email with params:', templateParams);
       
       const result = await emailjs.send(
         EMAILJS_SERVICE_ID,
         EMAILJS_TEMPLATE_ID,
         templateParams
       );
       
       console.log('Email sent successfully:', result);
       return { success: true, message: t.contact.successMessage };
     } catch (error) {
       console.error('Error sending email:', error);
       return { success: false, message: t.contact.errorMessage + ': ' + error.message };
     }

   };

   // Handle form input changes
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData(prev => ({
       ...prev,
       [name]: value
     }));
   };

      // Handle pricing plan selection
      const handlePlanSelection = (plan, isExpress = false) => {
        const planType = isExpress 
          ? (language === 'es' ? 'Express' : 'Express') 
          : (language === 'es' ? 'Estándar' : 'Standard');

        const title = language === 'es'
          ? `Cotización - ${plan.name} (${planType})`
          : `Quote - ${plan.name} (${planType})`;

        const message = language === 'es'
          ? `Hola TIKNO,

      Me interesa el plan "${plan.name}" (${planType}) con un precio de ${plan.price} COP.

      ${plan.description}

      Características incluidas:
      ${plan.features.map(feature => `• ${feature}`).join('\n')}

      Me gustaría solicitar una cotización personalizada y conocer más detalles sobre este servicio.

      ¡Espero su respuesta!`
          : `Hello TIKNO,

      I am interested in the "${plan.name}" (${planType}) plan with a price of ${plan.price} COP.

      ${plan.description}

      Included features:
      ${plan.features.map(feature => `• ${feature}`).join('\n')}

      I would like to request a personalized quote and learn more details about this service.

      Looking forward to your reply!`;

        // Update form data
        setFormData({
          name: '',
          email: '',
          title: title,
          message: message
        });

        // Scroll to contact section
        scrollToSection('contacto');
      };

      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Validar campos vacíos
        if (!formData.name || !formData.email || !formData.title || !formData.message) {
          setSubmitMessage(language === 'es' 
            ? 'Por favor completa todos los campos antes de enviar.' 
            : 'Please fill out all fields before sending.'
          );
          return;
        }

        // Prevenir envíos múltiples
        if (isSubmitting) {
          return false;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        try {
          const result = await sendEmail(formData);
          setSubmitMessage(result.message);

          if (result.success) {
            // Reset form on success
            setFormData({
              name: '',
              email: '',
              title: '',
              message: ''
            });
            // Clear success message after 5 seconds
            setTimeout(() => setSubmitMessage(''), 5000);
          }
        } catch (error) {
          console.error('Form submission error:', error);
          setSubmitMessage(t.contact.errorMessage);
        } finally {
          setIsSubmitting(false);
        }

        return false;
      };

  
  const typewriterTexts = [
    'Creando experiencias digitales excepcionales',
    'Innovación cercana, software a tu alcance',
    'Hacemos simple lo digital'
  ];
  
  const projectCategories = [
  t.projects.categories.all, 
  t.projects.categories.web, 
  t.projects.categories.ecommerce, 
  t.projects.categories.landing, 
  t.projects.categories.admin, 
  t.projects.categories.development
  ];
  
const projects = [
  {
    id: 1,
    title: 'TIKNO Portfolio',
    category: language === 'es' ? 'Desarrollo Web' : 'Web Development',
    technologies: ['React', 'Anime.js', 'CSS3', 'JavaScript', 'HTML5'],
    status: language === 'es' ? '✅ COMPLETADO' : '✅ COMPLETED',
    description: language === 'es' ? 
      'Una página web moderna y profesional creada con React y Anime.js, diseñada para mostrar proyectos de desarrollo web de manera elegante e interactiva.' :
      'A modern and professional website created with React and Anime.js, designed to showcase web development projects in an elegant and interactive way.',
    image: process.env.PUBLIC_URL + '/Tikno.jpg',
    year: '2025',
    features: language === 'es' ? 
      ['Diseño Moderno', 'Animaciones Avanzadas', 'Responsive Design', 'Multiidioma', 'Portfolio Interactivo'] :
      ['Modern Design', 'Advanced Animations', 'Responsive Design', 'Multilingual', 'Interactive Portfolio'],
    liveUrl: 'https://tikno-col.github.io/TIKNO-',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 2,
    title: 'E-commerce TIKNO',
    category: language === 'es' ? 'E-commerce' : 'E-commerce',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    status: language === 'es' ? '✅ COMPLETADO' : '✅ COMPLETED',
    description: language === 'es' ? 
      'Plataforma de comercio electrónico completa con gestión de productos, carrito de compras, sistema de pagos y panel de administración.' :
      'Complete e-commerce platform with product management, shopping cart, payment system and administration panel.',
    image: process.env.PUBLIC_URL + '/ecommerce1.jpg',
    images: [process.env.PUBLIC_URL + '/ecommerce1.jpg', process.env.PUBLIC_URL + '/ecommerce2.jpg', process.env.PUBLIC_URL + '/ecommerce3.jpg'],
    year: '2025',
    features: language === 'es' ? 
      ['Carrito de compras', 'Sistema de pagos', 'Panel de administración', 'Gestión de inventario', 'Responsive design'] :
      ['Shopping cart', 'Payment system', 'Administration panel', 'Inventory management', 'Responsive design'],
    liveUrl: 'https://ecommerce-tiknowow.vercel.app',
    backendUrl: 'https://ecommerce-tikno-project.onrender.com',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 3,
    title: 'Blythe Dolls Landing',
    category: language === 'es' ? 'Landing Page' : 'Landing Page',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    status: language === 'es' ? '✅ COMPLETADO' : '✅ COMPLETED',
    description: language === 'es' ? 
      'Landing page moderna y elegante para Blythe Dolls, una tienda especializada en muñecas únicas y personalizadas. El sitio web presenta una experiencia visual atractiva con galería de productos, sistema de suscripción a newsletter y diseño completamente responsivo.' :
      'Modern and elegant landing page for Blythe Dolls, a store specialized in unique and personalized dolls. The website features an attractive visual experience with product gallery, newsletter subscription system and fully responsive design.',
    image: process.env.PUBLIC_URL + '/landingpage.jpg',
    year: '2025',
    features: language === 'es' ? 
      ['Experiencia visual atractiva', 'Galería de productos', 'Newsletter subscription', 'Diseño responsivo', 'Muñecas personalizadas'] :
      ['Attractive visual experience', 'Product gallery', 'Newsletter subscription', 'Responsive design', 'Personalized dolls'],
    liveUrl: 'https://landing-blythe-tikno.vercel.app',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 4,
    title: 'ERP TIKNO',
    category: language === 'es' ? 'Aplicacion web de administracion' : 'Admin Web Application',
    technologies: ['React', 'Django', 'PostgreSQL', 'JWT', 'tailwind'],
    status: language === 'es' ? '✅ COMPLETADO' : '✅ COMPLETED',
    description: language === 'es' ? 
      'ERP TIKNO es una aplicación web de administración de recursos empresariales que permite a las empresas gestionar sus operaciones de manera eficiente y efectiva. La aplicación ofrece una serie de módulos que abarcan desde la gestión de inventario y compras hasta la gestión de ventas y pagos. Además, la aplicación cuenta con un panel de control que permite a los usuarios monitorear y controlar sus operaciones en tiempo real.' :
      'ERP TIKNO is a business resource management web application that allows companies to manage their operations efficiently and effectively. The application offers a series of modules ranging from inventory and purchasing management to sales and payment management. Additionally, the application has a control panel that allows users to monitor and control their operations in real time.',
    image: process.env.PUBLIC_URL + '/erp.jpg',
    year: '2025',
    features: language === 'es' ? 
      ['Gestión de inventario', 'Compras y ventas', 'Pagos y facturación', 'Reportes y análisis', 'Seguridad y control de acceso'] :
      ['Inventory management', 'Purchases and sales', 'Payments and billing', 'Reports and analysis', 'Security and access control'],
    liveUrl: 'https://erptikno-flame.vercel.app/',
    backendUrl: 'https://erp-tikno.onrender.com',
    githubUrl: 'https://github.com/TIKNO-col'
  },
  {
    id: 5,
    title: language === 'es' ? 'Próximo Proyecto' : 'Next Project',
    category: language === 'es' ? 'En Desarrollo' : 'In Development',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    status: language === 'es' ? '🚧 EN DESARROLLO' : '🚧 IN DEVELOPMENT',
    description: language === 'es' ? 
      'Nuevo proyecto en desarrollo que incorporará las últimas tecnologías y mejores prácticas de desarrollo web.' :
      'New project in development that will incorporate the latest technologies and best practices in web development.',
    image: process.env.PUBLIC_URL + '/logoTIKNO.jpg',
    year: '2025',
    features: language === 'es' ? 
      ['Próximamente', 'Tecnologías modernas', 'Mejores prácticas', 'Innovación'] :
      ['Coming soon', 'Modern technologies', 'Best practices', 'Innovation'],
    liveUrl: '#',
    githubUrl: 'https://github.com/TIKNO-col'
  }
];
  
const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    description: language === 'es' ? 
      'Biblioteca para interfaces de usuario modernas y reactivas' :
      'Library for modern and reactive user interfaces'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    description: language === 'es' ? 
      'Runtime de JavaScript para desarrollo backend escalable' :
      'JavaScript runtime for scalable backend development'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: language === 'es' ? 
      'Lenguaje versátil para IA, ML y desarrollo backend' :
      'Versatile language for AI, ML and backend development'
  },
  {
    name: 'JavaScript',
    icon: '🟨',
    description: language === 'es' ? 
      'Lenguaje de programación dinámico para web' :
      'Dynamic programming language for web'
  },
  {
    name: 'Next.js',
    icon: '▲',
    description: language === 'es' ? 
      'Framework de React para aplicaciones web de producción' :
      'React framework for production web applications'
  },
  {
    name: 'Laravel',
    icon: '🔴',
    description: language === 'es' ? 
      'Framework PHP elegante para desarrollo web' :
      'Elegant PHP framework for web development'
  },
  {
    name: 'Django',
    icon: '🎸',
    description: language === 'es' ? 
      'Framework web de Python de alto nivel' :
      'High-level Python web framework'
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    description: language === 'es' ? 
      'Base de datos relacional avanzada y confiable' :
      'Advanced and reliable relational database'
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: language === 'es' ? 
      'Plataforma de contenedores para desarrollo y despliegue' :
      'Container platform for development and deployment'
  },
  {
    name: 'Azure',
    icon: '☁️',
    description: language === 'es' ? 
      'Servicios en la nube de Microsoft para infraestructura robusta' :
      'Microsoft cloud services for robust infrastructure'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: language === 'es' ? 
      'Base de datos NoSQL flexible y de alto rendimiento' :
      'Flexible and high-performance NoSQL database'
  },
  {
    name: 'Bootstrap',
    icon: '🅱️',
    description: language === 'es' ? 
      'Framework CSS para desarrollo responsive rápido' :
      'CSS framework for rapid responsive development'
  }
];
  
const pricingPlans = [
  {
    name: language === 'es' ? 'Presencia digital' : 'Digital Presence',
    price: language === 'es' ? '$700.000' : '$179',
    priceUS: '179',
    icon: '🚀',
    description: language === 'es' ? 
      'Tu negocio online con presencia profesional lista para crecer.' :
      'Your online business with professional presence ready to grow.',
    features: language === 'es' ? 
      ['Landing page profesional', 'Diseño 100% responsive', '5 páginas incluidas','integracion WhatsApp Business', 'Formulario de contacto', 'Hosting y dominio por 1 año','30 dias de ajustes post-entrega'] :
      ['Professional landing page', '100% responsive design', '5 pages included', 'WhatsApp Business integration', 'Contact form', 'Hosting and domain for 1 year', '30 days of post-delivery adjustments']
  },
  {
    name: language === 'es' ? 'Vende En Línea' : 'Sell Online',
    price: language === 'es' ? '$2.700.000' : '$691',
    priceUS: '691',
    icon: '🚀',
    description: language === 'es' ? 
      'E-commerce completo llave en mano' :
      'Complete turnkey e-commerce',
    features: language === 'es' ? 
      ['Tienda online completa (WooCommerce o personalizada)', 'Panel de administración intuitivo', 'Catálogo variable de productos', 'Pasarelas de pago', 'Hosting y Dominio 1 año', 'capacitacion incluido','Soporte 24/7'] :
      ['Complete online store (WooCommerce or custom)', 'Intuitive administration panel', 'Variable product catalog', 'Payment gateways', 'Hosting and Domain 1 year', 'Training included', '24/7 Support'],
    popular: false
  },
  {
    name: language === 'es' ? 'Solución a Medida' : 'Custom Solution',
    price: language === 'es' ? '$4.000.000' : '$1,024',
    priceUS: '1024',
    icon: '🏢',
    description: language === 'es' ? 
      'Software personalizado para necesidades específicas' :
      'Custom software for specific needs',
    features: language === 'es' ? 
      ['Aplicación web', 'Base de Datos robusta', 'API REST documentada', 'Dashboard administrativo', 'Reportes y analytic', '90 días de garantia', 'Documentacion técnica completa, Integracion y capacitacion'] :
      ['Web application', 'Robust database', 'Documented REST API', 'Administrative dashboard', 'Reports and analytics', '90 days warranty', 'Complete technical documentation, Integration and training']
  }
];

const pricingPlansExpress = [
  {
    name: language === 'es' ? 'Express Wordpress' : 'Express WordPress',
    price: language === 'es' ? '$626.700' : '$160',
    priceUS: '160',
    icon: '🚀',
    description: language === 'es' ? 
      'Pagina express en WordPress rapida.' :
      'Fast express WordPress page.',
    features: language === 'es' ? 
      ['Instalacion y configuración', 'Plantilla premium', '5 páginas de contenido ', 'Hosting y dominio por 1 año'] :
      ['Installation and configuration', 'Premium template', '5 content pages', 'Hosting and domain for 1 year']
  },
  {
    name: language === 'es' ? 'Express Shopify' : 'Express Shopify',
    price: language === 'es' ? '$900.000' : '$230',
    priceUS: '230',
    icon: '🚀',
    description: language === 'es' ? 
      'Tienda en Shopify rapida y funcional.' :
      'Fast and functional Shopify store.',
    features: language === 'es' ? 
      ['Configuración tienda Shopify', 'Diseño personalizado', 'Carga de productos (hasta 30)', 'Hosting y dominio por 1 año'] :
      ['Shopify store configuration', 'Custom design', 'Product upload (up to 30)', 'Hosting and domain for 1 year'],
    popular: false
  },
  {
    name: language === 'es' ? 'Express Astro (Ultra Rápida)' : 'Express Astro (Ultra Fast)',
    price: language === 'es' ? '$600.000' : '$154',
    priceUS: '154',
    icon: '🚀',
    description: language === 'es' ? 
      'Sitio web estático moderno y rápido, construido con Astro.' :
      'Modern and fast static website built with Astro.',
    features: language === 'es' ? 
      ['Desarollo sitio estático Astro', 'Optimizaciones de velocidad', 'SEO', 'Hosting y dominio por 1 año'] :
      ['Astro static site development', 'Speed optimizations', 'SEO', 'Hosting and domain for 1 year'],
    popular: false
  }
  ];

const teamMembers = [
  {
    name: 'Nicolas Moreno',
    role: language === 'es' ? 
      'Co-Fundador & Desarrollador Backend' :
      'Co-Founder & Backend Developer',
    skills: ['React', 'Node.js','PostgreSQL', 'Python', 'Django', 'Laravel', 'express', 'astro'],
    avatar: '👨‍💻',
    description: language === 'es' ? 
      'Especialista en desarrollo backend, con experiencia en frameworks como Django, Laravel y Node.js.' :
      'Backend development specialist, with experience in frameworks like Django, Laravel and Node.js.'
  },
  {
    name: 'Esteban Lozano',
    role: language === 'es' ? 
      'Co-Fundador & Full Stack Developer' :
      'Co-Founder & Full Stack Developer',
    skills: ['Python', 'PostgreSQL', 'Docker', 'SQL', 'java', 'js', 'react'],
    avatar: '👨‍💻',
    description: language === 'es' ? 
      'desarrollador como full stack con experiencia en bases de datos y infraestructura cloud' :
      'Full stack developer with experience in databases and cloud infrastructure'
  }
];
  
  // Efecto de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Animación de entrada del hero
      anime({
        targets: '.hero-content > *',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 1000,
        easing: 'easeOutExpo'
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Efecto máquina de escribir
  useEffect(() => {
    if (!isLoading) {
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      
      const typeWriter = () => {
        const currentText = typewriterTexts[currentTextIndex];
        
        if (isDeleting) {
          setTypewriterText(currentText.substring(0, currentCharIndex - 1));
          currentCharIndex--;
        } else {
          setTypewriterText(currentText.substring(0, currentCharIndex + 1));
          currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentText.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
          typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
      };
      
      typeWriter();
    }
  }, [isLoading]);
  
  // Cursor personalizado eliminado
  
  // Efecto de scroll reveal mejorado
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          // Hacer visible la sección inmediatamente
          target.style.opacity = '1';
          target.style.visibility = 'visible';
          
          // Animaciones específicas por sección
          if (target.classList.contains('projects')) {
            // Animar filtros primero
            setTimeout(() => {
              anime({
                targets: '.filter-btn',
                translateY: [30, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                delay: anime.stagger(50),
                duration: 600,
                easing: 'easeOutExpo'
              });
            }, 100);
            
            // Luego las tarjetas con animación mejorada
            setTimeout(() => {
              anime({
                targets: '.project-card',
                translateY: [50, 0],
                opacity: [0, 1],
                scale: [0.9, 1],
                delay: anime.stagger(150),
                duration: 800,
                easing: 'easeOutExpo'
              });
            }, 300);
          }
          
          if (target.classList.contains('technologies')) {
            setTimeout(() => {
              anime({
                targets: '.tech-card',
                scale: [0.8, 1],
                opacity: [0, 1],
                delay: anime.stagger(150),
                duration: 600,
                easing: 'easeOutExpo'
              });
            }, 100);
          }
          
          if (target.classList.contains('pricing')) {
            setTimeout(() => {
              anime({
                targets: '.pricing-card',
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'easeOutExpo'
              });
            }, 100);
          }
          
          if (target.classList.contains('team')) {
            setTimeout(() => {
              anime({
                targets: '.team-card',
                translateY: [50, 0],
                opacity: [0, 1],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'easeOutExpo'
              });
            }, 100);
          }
          
          if (target.classList.contains('contact')) {
            setTimeout(() => {
              anime({
                targets: '.contact-content > *',
                translateY: [30, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
                duration: 600,
                easing: 'easeOutExpo'
              });
            }, 100);
          }
          
          // Añadir clases de animación CSS
          target.classList.add('animate-up');
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);
    
    // Observar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
    
    // Observador adicional para títulos de sección
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-glow');
          anime({
            targets: entry.target,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo'
          });
          titleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => titleObserver.observe(title));
    
    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  // Filtrar y buscar proyectos
  const filteredProjects = projects
    .filter(project => {
      const matchesCategory = projectFilter === 'Todos' || project.category === projectFilter;
      const matchesSearch = projectSearch === '' || 
        project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
        project.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(projectSearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (projectSort) {
        case 'newest':
          return parseInt(b.year) - parseInt(a.year);
        case 'oldest':
          return parseInt(a.year) - parseInt(b.year);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  // Efecto para animar cambios en filtros
  useEffect(() => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.style.opacity = '0.7';
      projectsGrid.style.transform = 'scale(0.98)';
      
      const timer = setTimeout(() => {
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'scale(1)';
        projectsGrid.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Re-animar las tarjetas de proyecto después del filtrado
        anime({
          targets: '.project-card',
          translateY: [20, 0],
          opacity: [0.8, 1],
          scale: [0.95, 1],
          delay: anime.stagger(100),
          duration: 600,
          easing: 'easeOutExpo'
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [projectFilter, projectSearch, projectSort]);

  // Guardar preferencias en localStorage
  useEffect(() => {
    localStorage.setItem('tikno-project-filter', projectFilter);
  }, [projectFilter]);

  useEffect(() => {
    localStorage.setItem('tikno-project-search', projectSearch);
  }, [projectSearch]);

  useEffect(() => {
    localStorage.setItem('tikno-project-sort', projectSort);
  }, [projectSort]);

  // Función para limpiar filtros
  const clearFilters = () => {
    setProjectFilter('Todos');
    setProjectSearch('');
    setProjectSort('newest');
  };


  
  // Navegación suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  
  // Abrir modal de proyecto
  const openProjectModal = (project) => {
    setSelectedProject(project);
    anime({
      targets: '.project-modal',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo'
    });
  };
  
  // Cerrar modal de proyecto
  const closeProjectModal = () => {
    anime({
      targets: '.project-modal',
      scale: [1, 0.8],
      opacity: [1, 0],
      duration: 300,
      easing: 'easeInExpo',
      complete: () => setSelectedProject(null)
    });
  };
  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <h1>TIKNO</h1>
            <div className="loading-tagline">Innovación cercana, software a tu alcance</div>
          </div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="App">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">
            <h2>TIKNO</h2>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a href="#inicio" onClick={() => scrollToSection('inicio')} className={activeSection === 'inicio' ? 'active' : ''}>{t.nav.inicio}</a></li>
            <li><a href="#proyectos" onClick={() => scrollToSection('proyectos')} className={activeSection === 'proyectos' ? 'active' : ''}>{t.nav.proyectos}</a></li>
            <li><a href="#tecnologias" onClick={() => scrollToSection('tecnologias')} className={activeSection === 'tecnologias' ? 'active' : ''}>{t.nav.tecnologias}</a></li>
            <li><a href="#precios" onClick={() => scrollToSection('precios')} className={activeSection === 'precios' ? 'active' : ''}>{t.nav.precios}</a></li>
            <li><a href="#equipo" onClick={() => scrollToSection('equipo')} className={activeSection === 'equipo' ? 'active' : ''}>{t.nav.equipo}</a></li>
            <li><a href="#contacto" onClick={() => scrollToSection('contacto')} className={activeSection === 'contacto' ? 'active' : ''}>{t.nav.contacto}</a></li>
            <li className="language-switcher">
              <button 
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => setLanguage('es')}
              >
                ES
              </button>
              <span className="lang-separator">|</span>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </li>
          </ul>
          
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      
      {/* Hero Section - Minimal & Impactful */}
      <section id="inicio" className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        {/* Partículas flotantes decorativas */}
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        
        {/* Elementos geométricos flotantes */}
        <div className="hero-geometric">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-intro">
              <span className="hero-greeting">{t.hero.greeting}</span>
              <h1 className="hero-title">
                <span className="title-main">TIKNO</span>
                <span className="title-accent">{t.hero.studio}</span>
              </h1>
            </div>
            
            <div className="hero-mission">
              <p className="mission-text">
                {t.hero.mission}
              </p>
            </div>
            
            <div className="hero-actions">
              <button className="btn-minimal btn-primary" onClick={() => scrollToSection('proyectos')}>
                {t.hero.btnProjects}
              </button>
              <button className="btn-minimal btn-outline" onClick={() => scrollToSection('contacto')}>
                {t.hero.btnContact}
              </button>
            </div>
            
            <div className="hero-scroll">
              <div className="scroll-line"></div>
              <span className="scroll-label">{t.hero.scroll}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Proyectos Section */}
      <section id="proyectos" className="section">
        <div className="container">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
          
          {/* Aviso importante sobre backends */}
          <div className="backend-notice">
            <div className="notice-icon">⚠️</div>
            <div className="notice-content">
              <h4>{t.projects.backendNotice.title}</h4>
              <p>{t.projects.backendNotice.description}</p>
              <div className="backend-links">
                <a href="https://erp-tikno.onrender.com" target="_blank" rel="noopener noreferrer" className="backend-link">
                  🔗 {t.projects.backendNotice.activateERP}
                </a>
                <a href="https://ecommerce-tikno-project.onrender.com" target="_blank" rel="noopener noreferrer" className="backend-link">
                  🔗 {t.projects.backendNotice.activateEcommerce}
                </a>
              </div>
              <small>{t.projects.backendNotice.note}</small>
            </div>
          </div>
          
          {/* Controles de filtrado y búsqueda */}
           <div className="project-controls">
             <div className="project-search">
               <input
                 type="text"
                 placeholder={t.projects.searchPlaceholder}
                 value={projectSearch}
                 onChange={(e) => setProjectSearch(e.target.value)}
                 className="search-input"
                 aria-label={t.projects.searchAriaLabel}
               />
               <span className="search-icon">🔍</span>
             </div>
             
             <div className="project-controls-right">
               <div className="project-sort">
                 <select
                   value={projectSort}
                   onChange={(e) => setProjectSort(e.target.value)}
                   className="sort-select"
                   aria-label="Ordenar proyectos"
                 >
                   <option value="newest">{t.projects.sort.newest}</option>
                   <option value="oldest">{t.projects.sort.oldest}</option>
                   <option value="alphabetical">{t.projects.sort.alphabetical}</option>
                 </select>
               </div>
               
               {(projectFilter !== 'Todos' || projectSearch !== '' || projectSort !== 'newest') && (
                 <button
                   onClick={clearFilters}
                   className="clear-filters-btn"
                   aria-label="Limpiar todos los filtros"
                   title="Limpiar filtros"
                 >
                   ✕ Limpiar
                 </button>
               )}
             </div>
           </div>

          {/* Filtros */}
          <div className="project-filters">
            {projectCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${projectFilter === category ? 'active' : ''}`}
                onClick={() => setProjectFilter(category)}
              >
                {category}
                <span className="filter-count">
                  {category === 'Todos' ? projects.length : projects.filter(p => p.category === category).length}
                </span>
              </button>
            ))}
          </div>
          
          {/* Contador de resultados */}
          <div className="project-results-count">
            {filteredProjects.length === 0 ? (
              <p className="no-results">No se encontraron proyectos que coincidan con tu búsqueda.</p>
            ) : (
              <p className="results-text">
                Mostrando {filteredProjects.length} de {projects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
                {projectSearch && ` para "${projectSearch}"`}
              </p>
            )}
          </div>
          
          {/* Grid de proyectos */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card" onClick={() => openProjectModal(project)}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <button className="project-view-btn">Ver Proyecto</button>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={`${project.id}-tech-${index}`} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="project-status">{project.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tecnologías Section */}
      <section id="tecnologias" className="section">
        <div className="container">
          <h2 className="section-title">{t.technologies.title}</h2>
          <p className="section-subtitle">
            {t.technologies.subtitle}
          </p>
          
          <div className="technologies-grid">
            {technologies.map(tech => (
              <div key={tech.name} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Precios Section */}
      <section id="precios" className="section">
        <div className="container">
          <h2 className="section-title">{t.pricing.title}</h2>
          <p className="section-subtitle">
            {t.pricing.subtitle}
          </p>
          
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Más Popular</div>}
                <div className="pricing-header">
                  <div className="pricing-icon">{plan.icon}</div>
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <li key={`${plan.name}-feature-${index}`}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pricing-action">
                  <button 
                    className="btn btn-primary pricing-btn"
                    onClick={() => handlePlanSelection(plan, false)}
                  >
                    {t.pricing.requestQuote}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Precios Section */}
      <section id="precios" className="section">
        <div className="container">
          <h2 className="section-title">{t.pricing.titleExpress}</h2>
          <p className="section-subtitle">
            {t.pricing.subtitleExpress}
          </p> 
          <div className="pricing-grid">
            {pricingPlansExpress.map(plan => (
              <div key={`express-${plan.name}`} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Más Popular</div>}
                <div className="pricing-header">
                  <div className="pricing-icon">{plan.icon}</div>
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <li key={`express-${plan.name}-feature-${index}`}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pricing-action">
                  <button 
                    className="btn btn-primary pricing-btn"
                    onClick={() => handlePlanSelection(plan, true)}
                  >
                    {t.pricing.requestQuote}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipo Section */}
      <section id="equipo" className="section">
        <div className="container">
          <h2 className="section-title">{t.team.title}</h2>
          <p className="section-subtitle">
            {t.team.subtitle}
          </p>
          
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-description">{member.description}</p>
                <div className="team-skills">
                  {member.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contacto Section */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t.contact.info}</h3>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>nm5571762@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+57 (350) 232-8517</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>Colombia</p>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/TIKNO-col" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {submitMessage && (
                <div className={`form-message ${submitMessage.includes('Error') || submitMessage.includes('error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.namePlaceholder} 
                    required 
                    disabled={isSubmitting}
                    className="w-full"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.emailPlaceholder} 
                    required 
                    disabled={isSubmitting}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder={t.contact.subjectPlaceholder} 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.contact.messagePlaceholder} 
                  rows="6" 
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.contact.sending : t.contact.sendButton}
              </button>
            </form>
          </div>
        </div>
      </section>
      
    {/* Footer */}
  <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-brand">
        <h3>{t.footer.brand}</h3>
        <p>{t.footer.brandDescription}</p>
        <p>{t.footer.brandQuote}</p>
      </div>
      <div className="footer-links">
        <h4>{t.footer.links}</h4>
        <ul>
          <li><a href="#inicio">{t.footer.inicio}</a></li>
          <li><a href="#proyectos">{t.footer.proyectos}</a></li>
          <li><a href="#tecnologias">{t.footer.tecnologias}</a></li>
          <li><a href="#precios">{t.footer.precios}</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>{t.footer.contact}</h4>
        <p>{t.footer.email}</p>
        <p>{t.footer.phone}</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 {t.footer.brand}. {t.footer.rights}</p>
      <p>{t.footer.developedBy}</p>
    </div>
  </div>
</footer>
      
      {/* Modal de Proyecto */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="modal-category">{selectedProject.category}</div>
                <div className="modal-status">{selectedProject.status}</div>
              </div>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
                </div>
                
                <div className="modal-info">
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-technologies">
                    <h4>Tecnologías utilizadas:</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={`modal-tech-${index}`} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-features">
                    <h4>Características principales:</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={`modal-feature-${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-actions">
                    <a href={selectedProject.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Ver en vivo
                    </a>
                    <a href={selectedProject.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      Ver código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;