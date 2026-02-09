import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsPointer(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Don't render on mobile
  if (window.innerWidth <= 768) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
            isPointer ? 'scale-150' : 'scale-100'
          }`}
        >
          {/* Inner dot */}
          <div className="w-2 h-2 bg-spectrus-lime rounded-full" />
          
          {/* Outer ring */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-spectrus-lime rounded-full transition-all duration-300 ${
              isPointer ? 'w-12 h-12 opacity-40' : 'w-8 h-8 opacity-60'
            }`}
          />
        </div>
      </div>

      {/* Trail effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-500 ease-out opacity-20"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="w-16 h-16 bg-spectrus-lime rounded-full blur-xl -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
};

export default CustomCursor;