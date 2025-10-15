import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🛡️</span>
              <span className="logo-text">MeshGuard Pro</span>
            </div>
            <p className="footer-description">
              Professional magnetic mesh screen installations for homes and businesses in Nairobi. 
              Enjoy fresh air without the bugs with our premium quality solutions.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+254700000000" className="contact-value">+254 700 000 000</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-details">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:info@meshguardpro.com" className="contact-value">info@meshguardpro.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div className="contact-details">
                  <span className="contact-label">Business Hours</span>
                  <span className="contact-value">Mon-Sun: 7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('hero')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')}>Features</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')}>Our Work</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')}>Testimonials</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solution-finder')}>Get Quote</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="section-title">Our Services</h3>
            <ul className="footer-links">
              <li><span>Sliding Door Mesh</span></li>
              <li><span>French Door Screens</span></li>
              <li><span>Window Mesh</span></li>
              <li><span>Pet-Friendly Solutions</span></li>
              <li><span>Custom Installations</span></li>
              <li><span>Commercial Projects</span></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h3 className="section-title">Service Areas</h3>
            <div className="service-areas">
              <span className="area-tag">Nairobi West</span>
              <span className="area-tag">Karen</span>
              <span className="area-tag">Westlands</span>
              <span className="area-tag">Lavington</span>
              <span className="area-tag">Runda</span>
              <span className="area-tag">Kileleshwa</span>
              <span className="area-tag">Kilimani</span>
              <span className="area-tag">South B/C</span>
              <span className="area-tag-more">+ More Areas</span>
            </div>

            <div className="emergency-notice">
              <div className="notice-icon">⚡</div>
              <div className="notice-text">
                <strong>Emergency Service Available</strong>
                <span>Urgent installations? Call us anytime!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Trust Section */}
        <div className="footer-middle">
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://wa.me/254700000000" className="social-link whatsapp">
                <span className="social-icon">💬</span>
                <span>WhatsApp</span>
              </a>
              <a href="#" className="social-link facebook">
                <span className="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="#" className="social-link instagram">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <span className="badge-icon">✅</span>
              <span>Verified Business</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🏆</span>
              <span>Quality Guaranteed</span>
            </div>
            <div className="trust-badge">
              <span className="badge-icon">🛡️</span>
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} MeshGuard Pro. All rights reserved.</p>
          </div>
          
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>

          <button className="back-to-top" onClick={scrollToTop}>
            <span>↑</span>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;