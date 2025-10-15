import React, { useState, useEffect } from 'react';
import './Navbar.css';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">MeshGuard Pro</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Our Work</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</button>
          <button onClick={() => scrollToSection('solution-finder')} className="nav-link">Get Quote</button>
        </div>

        {/* CTA Button */}
        <div className="nav-actions">
          <a href="tel:+254700000000" className="nav-phone">
            <span className="phone-icon">📞</span>
            <span className="phone-text">+254 700 000 000</span>
          </a>
          <button 
            className="nav-cta"
            onClick={() => scrollToSection('cta')}
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`menu-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="mobile-nav-link">Features</button>
          <button onClick={() => scrollToSection('gallery')} className="mobile-nav-link">Our Work</button>
          <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-link">Reviews</button>
          <button onClick={() => scrollToSection('solution-finder')} className="mobile-nav-link">Get Quote</button>
          
          <div className="mobile-actions">
            <a href="tel:+254700000000" className="mobile-phone">
              <span className="phone-icon">📞</span>
              Call Now: +254 700 000 000
            </a>
            <button 
              className="mobile-cta"
              onClick={() => scrollToSection('cta')}
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;