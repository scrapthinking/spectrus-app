import { useEffect, useState } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-spectrus-black flex items-center justify-center transition-all duration-800 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      <div className="text-center">
        {/* Logo Star Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative animate-pulse-slow">
            {/* Estrella SPECTRUS simulada */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(209, 218, 77, 0.5))',
              }}
            >
              <polygon
                points="50,10 61,35 88,40 69,58 73,85 50,72 27,85 31,58 12,40 39,35"
                fill="#D1DA4D"
                className="animate-pulse-slow"
              />
              <polygon
                points="50,15 59,37 83,42 67,57 71,80 50,69 29,80 33,57 17,42 41,37"
                fill="#2D2D2C"
              />
            </svg>
          </div>
          
          {/* Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border border-spectrus-lime/30 rounded-full animate-ping" />
          </div>
        </div>

        {/* Brand name */}
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-spectrus-lime tracking-[0.3em] mb-6 animate-fade-in">
          SPECTRUS
        </h1>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-spectrus-gray/20 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-spectrus-lime transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Progress text */}
        <p className="font-raleway text-spectrus-gray text-sm mt-4 tracking-wider">
          {Math.floor(Math.min(progress, 100))}%
        </p>

        {/* Subtext */}
        <p className="font-raleway text-spectrus-gray/60 text-xs mt-8 tracking-[0.2em] uppercase">
          Aerial Cinematography
        </p>
      </div>
    </div>
  );
};

export default Preloader;