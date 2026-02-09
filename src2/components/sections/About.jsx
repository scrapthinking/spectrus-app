import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mision');

  const stats = [
    { number: '5+', label: 'Años de Experiencia', icon: '📅' },
    { number: '200+', label: 'Proyectos Completados', icon: '🎬' },
    { number: '50+', label: 'Clientes Satisfechos', icon: '⭐' },
    { number: '15', label: 'Premios Ganados', icon: '🏆' },
  ];

  const team = [
    {
      name: 'Santiago Quintero',
      role: 'Director Creativo & Piloto',
      instagram: '@sq.vision',
      description: 'Especialista en cinematografía aérea con certificación DGAC. Más de 500 horas de vuelo.',
      // Placeholder para foto
    },
    {
      name: 'Juan David Valencia',
      role: 'Director de Fotografía',
      instagram: '@jdv_ph',
      description: 'Experto en color grading y postproducción. Graduado en Cine y Audiovisuales.',
      // Placeholder para foto
    },
    {
      name: 'María Rodríguez',
      role: 'Productora Ejecutiva',
      instagram: '@maria.prod',
      description: 'Gestión de proyectos y coordinación logística. 8 años en la industria audiovisual.',
      // Placeholder para foto
    },
    {
      name: 'Carlos Méndez',
      role: 'Técnico de Drones',
      instagram: '@carlos.fpv',
      description: 'Mantenimiento y operación técnica. Especialista en FPV racing y drones industriales.',
      // Placeholder para foto
    },
  ];

  const equipment = [
    { name: 'DJI Inspire 3', specs: '8K ProRes RAW, Full-Frame' },
    { name: 'DJI Mavic 3 Pro Cine', specs: 'Hasselblad, Apple ProRes' },
    { name: 'DJI FPV', specs: '4K/60fps, Acro Mode' },
    { name: 'DJI Matrice 300 RTK', specs: 'Inspecciones, Cámara Térmica' },
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías en cinematografía aérea para ofrecer resultados vanguardistas.',
      icon: '💡',
    },
    {
      title: 'Calidad',
      description: 'Cada proyecto es tratado con el máximo cuidado técnico y artístico, sin importar su escala.',
      icon: '✨',
    },
    {
      title: 'Seguridad',
      description: 'Operamos bajo estrictos protocolos de seguridad y cumplimiento normativo en cada vuelo.',
      icon: '🛡️',
    },
    {
      title: 'Creatividad',
      description: 'Transformamos ideas en historias visuales que conectan emocionalmente con las audiencias.',
      icon: '🎨',
    },
  ];

  return (
    <section id="nosotros" className="relative py-24 bg-spectrus-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spectrus-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-spectrus-lime rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-spectrus-lime" />
            <span className="font-raleway text-spectrus-lime text-xs tracking-[0.3em] uppercase mx-4">
              Quiénes Somos
            </span>
            <div className="h-px w-12 bg-spectrus-lime" />
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            SOBRE
            <span className="block text-spectrus-lime mt-2">SPECTRUS</span>
          </h2>
        </div>

        {/* Main Story */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-2xl p-8 md:p-12">
            <p className="font-raleway text-spectrus-gray text-lg leading-relaxed mb-6">
              Somos una <span className="text-spectrus-lime font-semibold">productora de contenido audiovisual</span> especializada 
              en cinematografía aérea con drones de última generación. Desde 2019, hemos transformado la manera en que las marcas 
              cuentan sus historias desde el cielo.
            </p>
            <p className="font-raleway text-spectrus-gray text-lg leading-relaxed mb-6">
              Nuestro equipo combina <span className="text-spectrus-lime font-semibold">pasión por la tecnología</span> con un profundo 
              entendimiento del arte cinematográfico. Cada proyecto es una oportunidad para superar límites creativos y técnicos.
            </p>
            <p className="font-raleway text-spectrus-gray text-lg leading-relaxed">
              Con sede en <span className="text-spectrus-lime font-semibold">Bogotá, Colombia</span>, hemos trabajado con clientes 
              en todo el país y la región, desde grandes marcas hasta proyectos independientes que merecen ser contados con 
              la misma dedicación.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-xl transition-all duration-300 hover:border-spectrus-lime/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spectrus-lime/10"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-cinzel text-4xl md:text-5xl font-bold text-spectrus-lime mb-2">
                {stat.number}
              </div>
              <div className="font-raleway text-spectrus-gray text-sm tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission/Vision Tabs */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('mision')}
              className={`px-8 py-3 font-raleway font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'mision'
                  ? 'bg-spectrus-lime text-spectrus-black shadow-lg shadow-spectrus-lime/30'
                  : 'bg-spectrus-gray/10 text-spectrus-gray hover:bg-spectrus-gray/20 border border-spectrus-gray/20'
              }`}
            >
              Misión
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 font-raleway font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'vision'
                  ? 'bg-spectrus-lime text-spectrus-black shadow-lg shadow-spectrus-lime/30'
                  : 'bg-spectrus-gray/10 text-spectrus-gray hover:bg-spectrus-gray/20 border border-spectrus-gray/20'
              }`}
            >
              Visión
            </button>
          </div>

          <div className="bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-2xl p-8 md:p-12 min-h-[200px] flex items-center justify-center">
            {activeTab === 'mision' ? (
              <div className="text-center animate-fade-in">
                <h3 className="font-cinzel text-2xl font-bold text-spectrus-lime mb-4">
                  Nuestra Misión
                </h3>
                <p className="font-raleway text-spectrus-gray text-lg leading-relaxed">
                  Proporcionar soluciones de cinematografía aérea que eleven la narrativa visual de nuestros clientes, 
                  combinando tecnología de punta con creatividad artística. Nos comprometemos a entregar contenido de 
                  la más alta calidad que supere expectativas y genere impacto memorable.
                </p>
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <h3 className="font-cinzel text-2xl font-bold text-spectrus-lime mb-4">
                  Nuestra Visión
                </h3>
                <p className="font-raleway text-spectrus-gray text-lg leading-relaxed">
                  Ser la productora líder en cinematografía aérea en Colombia y Latinoamérica, reconocidos por nuestra 
                  innovación técnica, excelencia creativa y compromiso con la seguridad. Aspiramos a ser el referente 
                  cuando se piense en perspectivas aéreas profesionales.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nuestros <span className="text-spectrus-lime">Valores</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-xl p-6 transition-all duration-300 hover:border-spectrus-lime/50 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white mb-3 group-hover:text-spectrus-lime transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="font-raleway text-spectrus-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nuestro <span className="text-spectrus-lime">Equipo</span>
          </h3>
          <p className="font-raleway text-spectrus-gray text-center mb-12 max-w-2xl mx-auto">
            Profesionales apasionados que hacen realidad cada visión
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-spectrus-lime/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-spectrus-lime/10"
              >
                {/* Photo Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-spectrus-gray/20 to-spectrus-black overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-spectrus-lime/20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* Grid pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #D1DA4D 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spectrus-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-cinzel text-xl font-bold text-white mb-1 group-hover:text-spectrus-lime transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="font-raleway text-spectrus-lime text-sm font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="font-raleway text-spectrus-gray/60 text-xs mb-3">
                    {member.instagram}
                  </p>
                  <p className="font-raleway text-spectrus-gray text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-spectrus-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nuestro <span className="text-spectrus-lime">Equipo Técnico</span>
          </h3>
          <p className="font-raleway text-spectrus-gray text-center mb-12">
            Tecnología de punta para resultados profesionales
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-xl p-6 transition-all duration-300 hover:border-spectrus-lime/50 hover:-translate-x-2"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center group-hover:bg-spectrus-lime/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-spectrus-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h4 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-spectrus-lime transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="font-raleway text-spectrus-gray text-sm">
                    {item.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;