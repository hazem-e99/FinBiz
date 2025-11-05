import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "font-medium transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-[#1F1F1F] text-white hover:bg-[#2a2a2a] rounded-[64px] px-6 py-4",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

