import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/spectrus', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
    },
    { 
      name: 'Vimeo', 
      url: 'https://vimeo.com/spectrus', 
      icon: 'M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/spectrus', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' 
    },
  ];

  const quickLinks = [
    { name: 'Servicios', path: '#servicios' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Nosotros', path: '#nosotros' },
    { name: 'Contacto', path: '#contacto' },
  ];

  return (
    <footer className="bg-spectrus-black border-t border-spectrus-gray/20">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 relative transition-transform duration-300 group-hover:rotate-180">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50,10 61,35 88,40 69,58 73,85 50,72 27,85 31,58 12,40 39,35"
                      fill="#D1DA4D"
                    />
                  </svg>
                </div>
                <span className="font-cinzel text-2xl font-bold text-spectrus-lime tracking-[0.2em]">
                  SPECTRUS
                </span>
              </div>
            </Link>
            
            <p className="font-raleway text-spectrus-gray text-sm leading-relaxed">
              Productora de contenido audiovisual especializada en cinematografía aérea de alta calidad.
            </p>

            <p className="font-raleway text-spectrus-gray/60 text-xs">
              Diseñado por Santiago Quintero & Juan David Valencia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-white mb-6 tracking-wider">
              Enlaces
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="font-raleway text-spectrus-gray hover:text-spectrus-lime transition-colors duration-300 text-sm cursor-pointer group inline-flex items-center"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-spectrus-lime transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-white mb-6 tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="font-raleway text-spectrus-gray text-sm">
                <span className="text-spectrus-lime">Email:</span><br />
                info@spectrus.com
              </li>
              <li className="font-raleway text-spectrus-gray text-sm">
                <span className="text-spectrus-lime">WhatsApp:</span><br />
                +57 300 000 0000
              </li>
              <li className="font-raleway text-spectrus-gray text-sm">
                <span className="text-spectrus-lime">Ubicación:</span><br />
                Bogotá, Colombia
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-white mb-6 tracking-wider">
              Síguenos
            </h3>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-spectrus-gray/10 hover:bg-spectrus-lime rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 fill-spectrus-gray group-hover:fill-spectrus-black transition-colors duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div>
              <p className="font-raleway text-spectrus-gray text-sm mb-3">
                Newsletter
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-spectrus-gray/10 border border-spectrus-gray/20 text-spectrus-gray text-sm focus:outline-none focus:border-spectrus-lime transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="cursor-pointer px-4 py-2 bg-spectrus-lime text-spectrus-black font-semibold hover:bg-spectrus-blue transition-colors duration-300"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spectrus-gray/20">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-raleway text-spectrus-gray/60 text-sm text-center md:text-left">
              © {currentYear} SPECTRUS. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a
                href="#"
                className="font-raleway text-spectrus-gray/60 hover:text-spectrus-lime text-sm transition-colors duration-300 cursor-pointer"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="font-raleway text-spectrus-gray/60 hover:text-spectrus-lime text-sm transition-colors duration-300 cursor-pointer"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;