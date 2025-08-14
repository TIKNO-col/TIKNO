# TIKNO Portfolio 

Una página web moderna y profesional creada con React y Anime.js, diseñada para mostrar proyectos de desarrollo web de manera elegante e interactiva.
https://tikno-col.github.io/TIKNO/

##  Características

- **Diseño Moderno**: Interfaz minimalista con efectos 3D y animaciones fluidas
- **Animaciones Avanzadas**: Implementadas con Anime.js para transiciones suaves
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Multiidioma**: Soporte para Español e Inglés
- **Portfolio Interactivo**: Cartas 3D con efectos hover y click
- **Performance Optimizado**: Carga rápida y experiencia fluida

##  Tecnologías Utilizadas

- **React 18** - Framework principal
- **Anime.js** - Librería de animaciones
- **CSS3** - Estilos personalizados con efectos 3D
- **HTML5** - Estructura semántica
- **JavaScript ES6+** - Lógica moderna

##  Instalación y Configuración

###  IMPORTANTE: Activación de Backends

**ANTES DE USAR LA APLICACIÓN**, es crucial activar los siguientes servicios backend:

- **ERP Backend**: https://erp-tikno.onrender.com
- **eCommerce Backend**: https://ecommerce-tikno-project.onrender.com

>  **Nota**: Estos servicios se suspenden automáticamente cada 15 minutos en Render por el plan gratuito. Es necesario visitarlos para activarlos antes de usar las funcionalidades del ERP y eCommerce en el portfolio.

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/nicolas2601/pagina-react.git
   cd pagina-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   - La aplicación se abrirá automáticamente en `http://localhost:3000`
   - Si no se abre automáticamente, navega manualmente a esa URL

## 📁 Estructura del Proyecto

```
nicorghost-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js          # Componente principal
│   ├── App.css         # Estilos principales
│   ├── index.js        # Punto de entrada
│   ├── index.css       # Estilos globales
│   └── reportWebVitals.js
├── package.json
└── README.md
```

##  Características del Diseño

### Paleta de Colores
- **Primario**: Negro profundo (#0a0a0a)
- **Secundario**: Blanco puro (#ffffff)
- **Acento**: Verde vibrante (#00ff88)
- **Grises**: Varios tonos para profundidad

### Animaciones Incluidas
- ✅ Efecto de carga con spinner
- ✅ Animaciones de entrada escalonadas
- ✅ Efecto typewriter en el título principal
- ✅ Cartas 3D con hover effects
- ✅ Transiciones suaves en botones
- ✅ Partículas animadas en el fondo
- ✅ Efectos de parallax sutiles

### Proyectos Showcase
El portfolio incluye 6 proyectos ficticios:
1. **EcoTech Solutions** - Plataforma sostenible
2. **CloudNine Dashboard** - Panel de administración
3. **PixelCraft Studio** - Portfolio creativo
4. **DataFlow Analytics** - Herramienta de datos
5. **MindBridge Connect** - Red social profesional
6. **TechVault Security** - Plataforma de seguridad

##  Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm build` - Crea la versión de producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración (irreversible)

##  Responsive Design

- **Desktop**: Experiencia completa con todas las animaciones
- **Tablet**: Layout adaptado con animaciones optimizadas
- **Mobile**: Diseño vertical con interacciones simplificadas

##  Despliegue

### Para GitHub Pages
1. Instalar gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Agregar al package.json:
   ```json
   "homepage": "https://nicolas2601.github.io/pagina-react",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Desplegar:
   ```bash
   npm run deploy
   ```

### Para Netlify
1. Conectar el repositorio a Netlify
2. Configurar:
   - Build command: `npm run build`
   - Publish directory: `build`

### Para Vercel
1. Instalar Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Desplegar:
   ```bash
   vercel
   ```

##  Funcionalidades Interactivas

- **Smooth Scrolling**: Navegación fluida entre secciones
- **Hover Effects**: Efectos visuales en elementos interactivos
- **Click Animations**: Animaciones al hacer click en las cartas
- **Language Toggle**: Cambio dinámico entre idiomas
- **Loading Screen**: Pantalla de carga con animación
- **Custom Cursor**: Cursor personalizado para desktop

##  SEO y Accesibilidad

- Meta tags optimizados
- Estructura semántica HTML5
- Soporte para lectores de pantalla
- Modo de alto contraste
- Respeto por preferencias de movimiento reducido

##  Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

##  Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**NicoRGhost**
- GitHub: [@nicolas2601](https://github.com/nicolas2601)
- Portfolio: [En construcción]

##  Agradecimientos

- [React](https://reactjs.org/) - Framework principal
- [Anime.js](https://animejs.com/) - Librería de animaciones
- [Google Fonts](https://fonts.google.com/) - Tipografía Inter
- [Create React App](https://create-react-app.dev/) - Configuración inicial
- Teban

---

 ¡No olvides dar una estrella al proyecto si te gustó!

## 📞 Soporte

Si tienes alguna pregunta o problema, no dudes en:
- Abrir un [Issue](https://github.com/nicolas2601/pagina-react/issues)
- Contactar al desarrollador

**¡Disfruta explorando el portfolio! **
