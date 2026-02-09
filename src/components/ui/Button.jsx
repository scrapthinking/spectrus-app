const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  href,
  type = 'button'
}) => {
  const baseStyles = 'font-raleway font-bold tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-spectrus-lime text-spectrus-black hover:bg-spectrus-blue hover:shadow-2xl hover:shadow-spectrus-lime/30 hover:-translate-y-1',
    secondary: 'bg-transparent border-2 border-spectrus-lime text-spectrus-lime hover:bg-spectrus-lime hover:text-spectrus-black hover:shadow-2xl hover:shadow-spectrus-lime/30',
    ghost: 'bg-transparent text-spectrus-gray hover:text-spectrus-lime hover:bg-spectrus-lime/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;