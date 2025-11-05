import React from 'react';
import logoSvg from '../../../assets/images/logos/logo.svg';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo SVG - width: 18px, height: 18px */}
      <img 
        src={logoSvg} 
        alt="FinBiz Logo" 
        className="w-[18px] h-[18px]"
      />
      
      {/* Brand Name - FinBiz */}
      <span 
        className="text-[#FBFBFB] font-semibold"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '20px',
          lineHeight: '16.2px',
          fontWeight: 600,
        }}
      >
        FinBiz
      </span>
    </div>
  );
};

export default Logo;

