import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Cinematografía Aérea',
    'Producción Audiovisual',
    'Inspecciones Técnicas',
    'Eventos en Vivo',
    'Real Estate',
    'Capacitación',
    'Otro',
  ];

  const budgets = [
    'Menos de $1M COP',
    '$1M - $3M COP',
    '$3M - $5M COP',
    '$5M - $10M COP',
    'Más de $10M COP',
    'Por definir',
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'info@spectrus.com',
      link: 'mailto:info@spectrus.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'WhatsApp',
      value: '+57 300 000 0000',
      link: 'https://wa.me/573000000000',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Ubicación',
      value: 'Bogotá, Colombia',
      link: 'https://maps.google.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horario',
      value: 'Lun - Vie: 9AM - 6PM',
      link: null,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);

    // TODO: Integrar con backend/API
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-spectrus-black/50 to-spectrus-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-spectrus-lime rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-spectrus-blue rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-spectrus-lime" />
            <span className="font-raleway text-spectrus-lime text-xs tracking-[0.3em] uppercase mx-4">
              Hablemos
            </span>
            <div className="h-px w-12 bg-spectrus-lime" />
          </div>

          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            COMIENZA TU
            <span className="block text-spectrus-lime mt-2">PROYECTO</span>
          </h2>

          <p className="font-raleway text-spectrus-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu idea y te ayudaremos a elevarla con las mejores perspectivas aéreas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-2xl p-8">
              <h3 className="font-cinzel text-2xl font-bold text-white mb-6">
                Información de <span className="text-spectrus-lime">Contacto</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center text-spectrus-lime group-hover:bg-spectrus-lime group-hover:text-spectrus-black transition-all duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-raleway text-spectrus-gray/60 text-xs uppercase tracking-wider mb-1">
                            {info.title}
                          </p>
                          <p className="font-raleway text-spectrus-gray font-semibold group-hover:text-spectrus-lime transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center text-spectrus-lime">
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-raleway text-spectrus-gray/60 text-xs uppercase tracking-wider mb-1">
                            {info.title}
                          </p>
                          <p className="font-raleway text-spectrus-gray font-semibold">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-2xl p-8">
              <h3 className="font-cinzel text-xl font-bold text-white mb-4">
                Síguenos
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/spectrus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center text-spectrus-lime hover:bg-spectrus-lime hover:text-spectrus-black transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href="https://vimeo.com/spectrus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center text-spectrus-lime hover:bg-spectrus-lime hover:text-spectrus-black transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/spectrus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-spectrus-lime/10 rounded-lg flex items-center justify-center text-spectrus-lime hover:bg-spectrus-lime hover:text-spectrus-black transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-spectrus-gray/5 backdrop-blur-sm border border-spectrus-gray/10 rounded-2xl p-8 md:p-12">
              {submitSuccess ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-spectrus-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-spectrus-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-cinzel text-3xl font-bold text-white mb-4">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="font-raleway text-spectrus-gray text-lg mb-8">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="cursor-pointer px-6 py-3 bg-spectrus-lime text-spectrus-black font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-spectrus-black/50 border ${
                          errors.name ? 'border-red-500' : 'border-spectrus-gray/20'
                        } rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300`}
                        placeholder="Juan Pérez"
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-xs font-raleway">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-spectrus-black/50 border ${
                          errors.email ? 'border-red-500' : 'border-spectrus-gray/20'
                        } rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300`}
                        placeholder="juan@ejemplo.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-xs font-raleway">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-spectrus-black/50 border ${
                          errors.phone ? 'border-red-500' : 'border-spectrus-gray/20'
                        } rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300`}
                        placeholder="+57 300 000 0000"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-red-500 text-xs font-raleway">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Empresa (Opcional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spectrus-black/50 border border-spectrus-gray/20 rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300"
                        placeholder="Mi Empresa S.A.S"
                      />
                    </div>
                  </div>

                  {/* Service and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Servicio de Interés *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-spectrus-black/50 border ${
                          errors.service ? 'border-red-500' : 'border-spectrus-gray/20'
                        } rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300 cursor-pointer`}
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-red-500 text-xs font-raleway">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                        Presupuesto Estimado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-spectrus-black/50 border border-spectrus-gray/20 rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300 cursor-pointer"
                      >
                        <option value="">Selecciona un rango</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-raleway text-spectrus-gray text-sm font-semibold mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 bg-spectrus-black/50 border ${
                        errors.message ? 'border-red-500' : 'border-spectrus-gray/20'
                      } rounded-lg text-spectrus-gray font-raleway focus:outline-none focus:border-spectrus-lime transition-colors duration-300 resize-none`}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-xs font-raleway">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-spectrus-lime text-spectrus-black font-raleway font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue hover:shadow-2xl hover:shadow-spectrus-lime/30 hover:-translate-y-1 cursor-pointer ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>

                  <p className="text-center text-spectrus-gray/60 text-xs font-raleway">
                    * Campos obligatorios
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;