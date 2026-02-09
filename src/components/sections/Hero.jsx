import { useEffect, useRef, useState, useMemo } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Generar partículas una sola vez usando useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  useEffect(() => {
    // Simular carga de video
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder gradient mientras no hay video */}
        <div className="absolute inset-0 bg-gradient-to-br from-spectrus-black via-spectrus-black/90 to-spectrus-black/70" />
        
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-spectrus-black/60 z-10" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 z-20 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #D1DA4D 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated line above */}
            <div className="flex items-center justify-center mb-8 animate-fade-in">
              <div className="h-px w-12 bg-spectrus-lime" />
              <span className="font-raleway text-spectrus-lime text-xs tracking-[0.3em] uppercase mx-4">
                Cinematografía Aérea
              </span>
              <div className="h-px w-12 bg-spectrus-lime" />
            </div>

            {/* Main heading */}
            <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight animate-slide-up">
              ELEVAMOS TU
              <span className="block text-spectrus-lime mt-2">
                VISIÓN
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-raleway text-spectrus-gray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Creamos contenido audiovisual excepcional desde las alturas. 
              Perspectivas únicas para marcas que buscan destacar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="cursor-pointer group px-8 py-4 bg-spectrus-lime text-spectrus-black font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue hover:shadow-2xl hover:shadow-spectrus-lime/30 hover:-translate-y-1 w-full sm:w-auto"
              >
                Ver Nuestro Trabajo
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('contacto')}
                className="cursor-pointer group px-8 py-4 bg-transparent border-2 border-spectrus-lime text-spectrus-lime font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-lime hover:text-spectrus-black hover:shadow-2xl hover:shadow-spectrus-lime/30 w-full sm:w-auto"
              >
                Iniciar Proyecto
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="font-cinzel text-4xl md:text-5xl font-bold text-spectrus-lime mb-2">
                  100+
                </div>
                <div className="font-raleway text-spectrus-gray text-xs md:text-sm tracking-wider uppercase">
                  Proyectos
                </div>
              </div>
              
              <div className="text-center border-l border-r border-spectrus-gray/20">
                <div className="font-cinzel text-4xl md:text-5xl font-bold text-spectrus-lime mb-2">
                  50+
                </div>
                <div className="font-raleway text-spectrus-gray text-xs md:text-sm tracking-wider uppercase">
                  Clientes
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-cinzel text-4xl md:text-5xl font-bold text-spectrus-lime mb-2">
                  120m
                </div>
                <div className="font-raleway text-spectrus-gray text-xs md:text-sm tracking-wider uppercase">
                  Altura Máx
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => scrollToSection('servicios')}>
          <span className="font-raleway text-spectrus-gray text-xs tracking-widest uppercase mb-2 group-hover:text-spectrus-lime transition-colors duration-300">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-spectrus-gray group-hover:border-spectrus-lime rounded-full flex items-start justify-center p-2 transition-colors duration-300">
            <div className="w-1 h-2 bg-spectrus-lime rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating particles effect - CORREGIDO */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-spectrus-lime rounded-full opacity-20 animate-pulse-slow"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;