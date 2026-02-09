import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
        </svg>
      ),
      title: "Cinematografía Aérea",
      description: "Capturamos perspectivas únicas desde el cielo con drones de última generación. Tomas cinematográficas profesionales para cine, publicidad y documentales.",
      features: ["4K/8K Raw", "120fps Slow Motion", "Estabilización Gimbal", "Vuelos hasta 120m"],
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Producción Audiovisual",
      description: "Creación de contenido audiovisual completo desde la conceptualización hasta la postproducción. Storytelling visual que conecta con tu audiencia.",
      features: ["Guión y Concepto", "Rodaje Profesional", "Edición Avanzada", "Color Grading"],
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Inspecciones Técnicas",
      description: "Inspecciones aéreas con tecnología térmica e infrarroja para infraestructura, construcción, energía y agricultura de precisión.",
      features: ["Cámara Térmica", "Ortomosaicos", "Mapeo 3D", "Análisis de Datos"],
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Eventos en Vivo",
      description: "Cobertura aérea en tiempo real para eventos deportivos, conciertos, bodas y eventos corporativos. Transmisión en vivo disponible.",
      features: ["Streaming HD", "Múltiples Ángulos", "FPV Racing", "Edición Express"],
    },
    {
      id: 5,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Real Estate",
      description: "Tours virtuales 360°, fotografía arquitectónica aérea y recorridos inmersivos para propiedades residenciales y comerciales.",
      features: ["Tours 360°", "Fotos HDR", "Planos de Sitio", "Videos Promocionales"],
    },
    {
      id: 6,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Capacitación",
      description: "Programas de formación para pilotos de drones, certificaciones y talleres de producción audiovisual aérea.",
      features: ["Certificación DGAC", "Práctica de Vuelo", "Seguridad Operacional", "Normativa Vigente"],
    },
  ];

  return (
    <section id="servicios" className="relative py-24 bg-spectrus-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-spectrus-lime rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-spectrus-blue rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-spectrus-lime" />
            <span className="font-raleway text-spectrus-lime text-xs tracking-[0.3em] uppercase mx-4">
              Lo que hacemos
            </span>
            <div className="h-px w-12 bg-spectrus-lime" />
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            NUESTROS
            <span className="block text-spectrus-lime mt-2">SERVICIOS</span>
          </h2>

          <p className="font-raleway text-spectrus-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Soluciones profesionales de cinematografía aérea adaptadas a las necesidades de tu proyecto
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-lg p-8 transition-all duration-500 hover:bg-spectrus-gray/10 hover:border-spectrus-lime/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spectrus-lime/10 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className={`mb-6 text-spectrus-lime transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''}`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-2xl font-bold text-white mb-4 group-hover:text-spectrus-lime transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-raleway text-spectrus-gray text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-spectrus-gray text-sm font-raleway">
                    <svg className="w-4 h-4 mr-2 text-spectrus-lime" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-spectrus-lime transition-all duration-500 group-hover:w-full" />

              {/* Number badge */}
              <div className="absolute top-6 right-6 font-cinzel text-6xl font-bold text-spectrus-lime/5 group-hover:text-spectrus-lime/10 transition-all duration-300">
                0{service.id}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-raleway text-spectrus-gray mb-6">
            ¿No encuentras lo que buscas? Creamos soluciones personalizadas
          </p>
          <a
            href="#contacto"
            className="inline-block cursor-pointer px-8 py-4 bg-spectrus-lime text-spectrus-black font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue hover:shadow-2xl hover:shadow-spectrus-lime/30 hover:-translate-y-1"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;