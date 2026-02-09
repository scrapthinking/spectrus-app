# SPECTRUS - Website

Sitio web para SPECTRUS, productora de contenido audiovisual especializada en cinematografía aérea con drones.

## 🚀 Características

- **React 18** con Vite para desarrollo rápido
- **Tailwind CSS** con colores personalizados de la marca
- **Animaciones premium** con CSS y transiciones suaves
- **Cursor personalizado** para experiencia desktop
- **Preloader animado** con logo SPECTRUS
- **Responsive design** optimizado para todos los dispositivos
- **Navegación suave** entre secciones
- **Diseño gótico-moderno** siguiendo el branding

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## 🎨 Paleta de Colores

- **Negro**: `#2D2D2C` - Color principal de fondo
- **Gris**: `#C6C6C5` - Texto secundario
- **Azul Claro**: `#DAE3F4` - Detalles premium
- **Verde Lima**: `#D1DA4D` - Acentos y CTAs

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── animations/
│   │   ├── CustomCursor.jsx    # Cursor personalizado
│   │   └── Preloader.jsx        # Pantalla de carga
│   ├── layout/
│   │   ├── Navbar.jsx           # Navegación principal
│   │   ├── Footer.jsx           # Pie de página
│   │   └── Layout.jsx           # Layout wrapper
│   ├── sections/
│   │   └── Hero.jsx             # Sección hero
│   └── ui/
│       └── Button.jsx           # Componente de botón
├── pages/
│   └── Home.jsx                 # Página principal
├── styles/
│   └── globals.css              # Estilos globales
└── App.jsx                      # Componente principal
```

## 🎯 Próximos Pasos

### Componentes por Desarrollar:

1. **Sección Servicios**
   - Tarjetas de servicios con animaciones
   - Enfoque en cinematografía aérea con drones
   - Íconos personalizados

2. **Portfolio/Showreel**
   - Grid de proyectos con hover effects
   - Video player personalizado
   - Filtros por categoría

3. **Sección Nosotros**
   - Historia de la empresa
   - Equipo y tecnología
   - Estadísticas animadas

4. **Formulario de Contacto**
   - Validación en tiempo real
   - Integración con backend/API
   - Diseño interactivo

5. **Animaciones Avanzadas**
   - GSAP ScrollTrigger para parallax
   - Three.js para elementos 3D
   - Framer Motion para transiciones

## 🔧 Dependencias a Instalar

Para animaciones avanzadas (opcional):

```bash
npm install gsap framer-motion
npm install @react-three/fiber @react-three/drei three
npm install lottie-react
npm install react-player
```

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ⚡ Performance

- Lazy loading de imágenes y videos
- Code splitting por rutas
- Optimización de assets
- Minificación en producción

## 🎬 Recomendaciones de Contenido

- **Videos**: Formato MP4/WebM, máx 10MB para hero
- **Imágenes**: WebP preferido, fallback JPG
- **Aspecto ratio hero**: 16:9
- **Logo**: SVG para mejor calidad

## 👥 Créditos

Diseñado por:
- Santiago Quintero (@sq.vision)
- Juan David Valencia (@jdv_ph)

Desarrollado para SPECTRUS © 2024

---


**Nota**: Este proyecto está en desarrollo activo. Algunas secciones están en construcción.