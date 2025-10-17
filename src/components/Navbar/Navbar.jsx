import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'our-work', 'reviews', 'get-quote', 'consultation'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo - Left */}
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-icon">🛡️</span>
          <span className="logo-text">MeshGuard Pro</span>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="nav-links">
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('our-work')} 
            className={`nav-link ${activeSection === 'our-work' ? 'active' : ''}`}
          >
            Our Work
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('get-quote')} 
            className={`nav-link ${activeSection === 'get-quote' ? 'active' : ''}`}
          >
            Get Quote
          </button>
        </div>

        {/* CTA & Phone - Right */}
        <div className="nav-actions">
          <a href="tel:+254700000000" className="nav-phone">
            <span className="phone-icon">📞</span>
            <span className="phone-text">+254 700 000 000</span>
          </a>
          <button 
            className="nav-cta"
            onClick={() => scrollToSection('consultation')}
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
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className={`mobile-nav-link ${activeSection === 'features' ? 'active' : ''}`}
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('our-work')} 
            className={`mobile-nav-link ${activeSection === 'our-work' ? 'active' : ''}`}
          >
            Our Work
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className={`mobile-nav-link ${activeSection === 'reviews' ? 'active' : ''}`}
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('get-quote')} 
            className={`mobile-nav-link ${activeSection === 'get-quote' ? 'active' : ''}`}
          >
            Get Quote
          </button>
          
          <div className="mobile-actions">
            <a href="tel:+254700000000" className="mobile-phone">
              <span className="phone-icon">📞</span>
              Call Now: +254 700 000 000
            </a>
            <button 
              className="mobile-cta"
              onClick={() => scrollToSection('consultation')}
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