import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'comercial', name: 'Comercial' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'cine', name: 'Cine/TV' },
  ];

  const projects = [
    {
      id: 1,
      title: "Campaña Turismo Colombia",
      category: "comercial",
      client: "ProColombia",
      year: "2024",
      type: "video", // video o image
      description: "Producción audiovisual de paisajes colombianos desde perspectivas aéreas únicas",
      tags: ["4K", "Drone", "Color Grading"],
    },
    {
      id: 2,
      title: "Festival de Música Estéreo Picnic",
      category: "eventos",
      client: "Páramo Presenta",
      year: "2024",
      type: "video",
      description: "Cobertura aérea en vivo del festival con tomas cinematográficas del público",
      tags: ["Live Streaming", "FPV", "Multicam"],
    },
    {
      id: 3,
      title: "Torre empresarial Bacatá",
      category: "real-estate",
      client: "BD Promotora",
      year: "2023",
      type: "image",
      description: "Tour virtual 360° y fotografía arquitectónica del proyecto inmobiliario",
      tags: ["360°", "HDR", "Arquitectura"],
    },
    {
      id: 4,
      title: "Serie 'Territorios Salvajes'",
      category: "cine",
      client: "Caracol Televisión",
      year: "2024",
      type: "video",
      description: "Cinematografía aérea para docuserie sobre biodiversidad colombiana",
      tags: ["8K", "RAW", "Gimbal"],
    },
    {
      id: 5,
      title: "Lanzamiento BMW X5",
      category: "comercial",
      client: "BMW Colombia",
      year: "2023",
      type: "video",
      description: "Spot publicitario con secuencias aéreas dinámicas del vehículo",
      tags: ["Slow Motion", "Tracking", "VFX"],
    },
    {
      id: 6,
      title: "Boda Destination Wedding",
      category: "eventos",
      client: "Privado",
      year: "2024",
      type: "image",
      description: "Cobertura aérea de ceremonia en villa campestre con edición cinematográfica",
      tags: ["Cine", "Color", "Emotional"],
    },
    {
      id: 7,
      title: "Proyecto Urbanístico Ciudad Verde",
      category: "real-estate",
      client: "Amarilo",
      year: "2023",
      type: "image",
      description: "Mapeo 3D y ortomosaico del desarrollo urbanístico completo",
      tags: ["Mapeo", "3D", "Ortofoto"],
    },
    {
      id: 8,
      title: "Documental 'Río Magdalena'",
      category: "cine",
      client: "Señal Colombia",
      year: "2024",
      type: "video",
      description: "Registro aéreo del recorrido completo del río más importante de Colombia",
      tags: ["Documental", "Naturaleza", "4K"],
    },
    {
      id: 9,
      title: "Inspección Parque Eólico",
      category: "comercial",
      client: "Celsia",
      year: "2023",
      type: "image",
      description: "Inspección técnica con cámara térmica de turbinas eólicas",
      tags: ["Térmica", "Industrial", "Técnico"],
    },
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-spectrus-black to-spectrus-black/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-spectrus-lime rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-spectrus-lime" />
            <span className="font-raleway text-spectrus-lime text-xs tracking-[0.3em] uppercase mx-4">
              Nuestro Trabajo
            </span>
            <div className="h-px w-12 bg-spectrus-lime" />
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            PORTFOLIO
            <span className="block text-spectrus-lime mt-2">DESTACADO</span>
          </h2>

          <p className="font-raleway text-spectrus-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Proyectos que han elevado la visión de nuestros clientes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 font-raleway font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-spectrus-lime text-spectrus-black shadow-lg shadow-spectrus-lime/30'
                  : 'bg-spectrus-gray/10 text-spectrus-gray hover:bg-spectrus-gray/20 hover:text-spectrus-lime border border-spectrus-gray/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-spectrus-gray/5 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spectrus-lime/20"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image/Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-spectrus-gray/20 to-spectrus-black overflow-hidden">
                {/* Placeholder con patrón */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.type === 'video' ? (
                    <svg className="w-20 h-20 text-spectrus-lime/30" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  ) : (
                    <svg className="w-20 h-20 text-spectrus-lime/30" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                {/* Grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #D1DA4D 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-spectrus-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Play button for videos */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-spectrus-lime rounded-full flex items-center justify-center transform scale-100 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-spectrus-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Year badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-spectrus-black/80 backdrop-blur-sm rounded-full">
                  <span className="font-raleway text-spectrus-lime text-xs font-semibold">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-spectrus-lime/10 text-spectrus-lime font-raleway text-xs font-semibold tracking-wider uppercase rounded-full mb-3">
                  {filters.find(f => f.id === project.category)?.name}
                </span>

                {/* Title */}
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-spectrus-lime transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="font-raleway text-spectrus-gray/60 text-sm mb-3">
                  Cliente: <span className="text-spectrus-gray">{project.client}</span>
                </p>

                {/* Description */}
                <p className="font-raleway text-spectrus-gray text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-spectrus-gray/10 text-spectrus-gray font-raleway text-xs rounded border border-spectrus-gray/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-spectrus-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-16">
          <button className="cursor-pointer group px-8 py-4 bg-transparent border-2 border-spectrus-lime text-spectrus-lime font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-lime hover:text-spectrus-black hover:shadow-2xl hover:shadow-spectrus-lime/30">
            Ver Más Proyectos
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Showreel CTA */}
        <div className="mt-24 p-12 bg-gradient-to-r from-spectrus-lime/10 to-spectrus-blue/10 rounded-2xl border border-spectrus-lime/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Quieres ver más?
            </h3>
            <p className="font-raleway text-spectrus-gray text-lg mb-8">
              Descarga nuestro showreel completo con los mejores proyectos de 2024
            </p>
            <button className="cursor-pointer px-8 py-4 bg-spectrus-lime text-spectrus-black font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue hover:shadow-2xl hover:shadow-spectrus-lime/30 hover:-translate-y-1">
              Descargar Showreel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;