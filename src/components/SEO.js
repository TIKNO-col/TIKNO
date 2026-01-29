import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, keywords, image, url, type = 'website', serviceSchema }) => {
  const { language } = useLanguage();
  const siteUrl = 'https://tikno.pro';
  const siteTitle = 'TIKNO | Software Studio de Élite en Colombia';
  const currentTitle = title ? `${title} | TIKNO` : siteTitle;
  const currentDescription = description || (language === 'es' 
    ? 'TIKNO: Estudio de software de élite. Expertos en Desarrollo Web, eCommerce y Aplicaciones a Medida. Transformamos ideas en soluciones digitales de alto impacto.' 
    : 'TIKNO: Elite software studio. Experts in Web Development, eCommerce, and Custom Applications. We transform ideas into high-impact digital solutions.');
  const currentImage = image ? `${siteUrl}${image}` : `${siteUrl}/Tikno.jpg`;
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Schema.org Structured Data (Organization)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "TIKNO",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/logoTIKNO.jpg`,
      "width": "512",
      "height": "512"
    },
    "description": currentDescription,
    "email": "contacto@tikno.pro",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Bogotá"
    },
    "founders": [
      { "@type": "Person", "name": "Nicolas Moreno" },
      { "@type": "Person", "name": "Esteban David Lozano" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-350-232-8517",
      "contactType": "sales",
      "areaServed": "Global",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://github.com/TIKNO-col",
      "https://instagram.com/tikno_col",
      "https://linkedin.com/company/tikno"
    ]
  };

  // WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "TIKNO",
    "publisher": { "@id": `${siteUrl}/#organization` },
    "inLanguage": language === 'es' ? 'es-CO' : 'en-US'
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={keywords || "desarrollo web colombia, software studio, ecommerce profesional, react bogota, tikno pro, diseño web premium"} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <html lang={language} />

      {/* Open Graph */}
      <meta property="og:locale" content={language === 'es' ? 'es_CO' : 'en_US'} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={currentImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="TIKNO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={currentImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
