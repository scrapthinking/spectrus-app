import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Portfolio', path: '#portfolio' },
    { name: 'Nosotros', path: '#nosotros' },
    { name: 'Contacto', path: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
        isScrolled
          ? 'bg-spectrus-black/95 backdrop-blur-md py-4 shadow-lg shadow-spectrus-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group cursor-pointer">
            <div className="flex items-center space-x-3">
              {/* Star icon */}
              <div className="w-8 h-8 relative transition-transform duration-300 group-hover:rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,10 61,35 88,40 69,58 73,85 50,72 27,85 31,58 12,40 39,35"
                    fill="#D1DA4D"
                  />
                </svg>
              </div>
              
              <span className="font-cinzel text-2xl font-bold text-spectrus-lime tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]">
                SPECTRUS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="font-raleway text-spectrus-gray hover:text-spectrus-lime transition-colors duration-300 text-sm tracking-wider uppercase relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-spectrus-lime transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="cursor-pointer px-6 py-3 bg-spectrus-lime text-spectrus-black font-raleway font-semibold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 hover:bg-spectrus-blue hover:shadow-lg hover:shadow-spectrus-lime/50 hover:-translate-y-0.5"
            >
              Comenzar Proyecto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden cursor-pointer w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
          >
            <span
              className={`w-6 h-0.5 bg-spectrus-lime transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-spectrus-lime transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-spectrus-lime transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-spectrus-black/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: isScrolled ? '70px' : '88px' }}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`transition-all duration-500 delay-${index * 100} ${
                isMobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-cinzel text-3xl text-spectrus-gray hover:text-spectrus-lime transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
          
          <li
            className={`transition-all duration-500 delay-500 ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer px-8 py-4 bg-spectrus-lime text-spectrus-black font-raleway font-semibold text-sm tracking-wider uppercase rounded-sm inline-block"
            >
              Comenzar Proyecto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;