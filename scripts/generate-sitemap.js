const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// TU DOMINIO FUTURO (Crucial para el SEO)
const hostname = 'https://tikno.pro';

// Las rutas de tu aplicación
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/nosotros', changefreq: 'monthly', priority: 0.8 },
  { url: '/proyectos', changefreq: 'weekly', priority: 0.8 },
  { url: '/precios', changefreq: 'weekly', priority: 0.9 },
  { url: '/equipo', changefreq: 'monthly', priority: 0.7 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacidad', changefreq: 'monthly', priority: 0.3 },
  // Programmatic SEO Service Pages
  { url: '/servicios/desarrollo-web', changefreq: 'weekly', priority: 0.85 },
  { url: '/servicios/ecommerce', changefreq: 'weekly', priority: 0.85 },
  { url: '/servicios/landing-page', changefreq: 'weekly', priority: 0.85 },
  { url: '/servicios/aplicacion-web', changefreq: 'weekly', priority: 0.85 }
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));

  sitemap.pipe(writeStream);

  urls.forEach(url => sitemap.write(url));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('✅ Sitemap generado correctamente en /public/sitemap.xml');
};

generateSitemap();
