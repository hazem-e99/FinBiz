import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaDribbble } from 'react-icons/fa';
import Logo from '../../common/Logo';
import NewsletterInput from '../../ui/NewsletterInput';
import './Footer.css';

const Footer = () => {
  const companyLinks = [
    { label: 'Service', href: '#service' },
    { label: 'Resources', href: '#resources' },
    { label: 'About us', href: '#about' },
  ];

  const helpLinks = [
    { label: 'Customer Support', href: '#support' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ];

  const socialIcons = [
    { Icon: FaTwitter, href: '#twitter', label: 'Twitter' },
    { Icon: FaFacebookF, href: '#facebook', label: 'Facebook' },
    { Icon: FaInstagram, href: '#instagram', label: 'Instagram' },
    { Icon: FaDribbble, href: '#dribbble', label: 'Dribbble' },
  ];

  return (
    <footer className="footer">
      {/* Inner Container */}
      <div className="footer-inner">
        {/* Main Content */}
        <div className="footer-content">
          {/* Left Section - Logo & Social */}
          <div className="footer-section footer-brand">
            <Logo />
            
            <div className="footer-brand-info">
              {/* Description */}
              <p className="footer-description">
                Data analysis software is a type of software tool used for data analysis and reporting.
              </p>

              {/* Social Icons */}
              <div className="footer-social">
                {/* eslint-disable-next-line no-unused-vars */}
                {socialIcons.map(({ Icon: IconComponent, href, label }) => {
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="footer-social-icon"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section footer-links-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section footer-links-section">
            <h3 className="footer-title">Help</h3>
            <ul className="footer-links">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section footer-newsletter">
            <h3 className="footer-title">Subscribe to Newsletter</h3>
            <NewsletterInput 
              placeholder="Enter email address"
              buttonText="Join"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Copyright */}
        <p className="footer-copyright">
          © Copyright 2024, All Rights Reserved by FinBiz
        </p>
      </div>
    </footer>
  );
};

export default Footer;

