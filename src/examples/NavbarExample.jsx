/**
 * Navbar Usage Examples
 * 
 * هذا الملف يحتوي على أمثلة مختلفة لاستخدام مكونات الـ Navbar
 */

import React from 'react';
import { Navbar, Logo, Button } from '../components';

// مثال 1: استخدام Navbar الكامل
export const BasicNavbarExample = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[92px]">
        {/* المحتوى هنا */}
      </div>
    </div>
  );
};

// مثال 2: استخدام Logo بشكل منفصل
export const LogoExample = () => {
  return (
    <div className="p-8 bg-[#0F0F0F]">
      <Logo />
    </div>
  );
};

// مثال 3: استخدام Button بشكل منفصل
export const ButtonExample = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-8 bg-[#0F0F0F] space-y-4">
      {/* زر عادي */}
      <Button variant="primary">
        Get started
      </Button>

      {/* زر مع onClick */}
      <Button variant="primary" onClick={handleClick}>
        Click me
      </Button>

      {/* زر مع حجم مخصص */}
      <Button 
        variant="primary"
        style={{ width: '200px', fontSize: '18px' }}
      >
        Custom Size
      </Button>
    </div>
  );
};

// مثال 4: Navbar مع محتوى كامل
export const FullPageExample = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-[92px] bg-[#0F0F0F] min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Build Your Financial Future
            </h1>
            <p className="text-2xl text-[#9B9CA1] mb-10">
              The modern way to manage your finances
            </p>
            <Button variant="primary">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// مثال 5: استخدام Logo كرابط
export const LogoWithLinkExample = () => {
  return (
    <div className="p-8 bg-[#0F0F0F]">
      <a href="/" className="inline-block">
        <Logo />
      </a>
    </div>
  );
};

// مثال 6: أزرار متعددة
export const MultipleButtonsExample = () => {
  return (
    <div className="p-8 bg-[#0F0F0F] flex gap-4">
      <Button variant="primary">
        Sign Up
      </Button>
      <Button variant="primary">
        Log In
      </Button>
      <Button variant="primary">
        Learn More
      </Button>
    </div>
  );
};

export default {
  BasicNavbarExample,
  LogoExample,
  ButtonExample,
  FullPageExample,
  LogoWithLinkExample,
  MultipleButtonsExample,
};

