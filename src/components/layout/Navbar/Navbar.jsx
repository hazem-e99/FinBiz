import React from 'react';
import Logo from '../../common/Logo';
import Button from '../../ui/Button';
import './Navbar.css';

const Navbar = () => {
  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Pages', href: '#pages', hasDropdown: true },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Blog', href: '#blog' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="navbar">
      {/* Inner Container */}
      <div 
        className="mx-auto flex items-center justify-between h-[52px]"
        style={{
          width: '100%',
          maxWidth: '1400px',
          paddingRight: '40.01px',
          paddingLeft: '40px',
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Navigation Items */}
        <ul 
          className="navbar-links flex items-center"
          style={{
            gap: '8px',
            borderRadius: '64px',
            padding: '4px',
            height: '47px',
          }}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block px-4 py-2 transition-colors duration-200 hover:text-white"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '18px',
                  lineHeight: '22.4px',
                  fontWeight: 400,
                  color: '#9B9CA1',
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="ml-1 inline-block">▾</span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <Button
          variant="primary"
          style={{
            width: '136px',
            // height: '52px',
            fontSize: '16px',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

