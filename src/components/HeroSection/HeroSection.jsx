import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  // Single high-impact product image - replace with your actual product image
  const productImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80';

  return (
    <section className="hero" id="hero">
      {/* Single high-impact background image */}
      <div className="hero-background">
        <div 
          className="hero-image"
          style={{ backgroundImage: `url(${productImage})` }}
        ></div>
      </div>
      
      <div className="hero-overlay-gradient"></div>
      <div className="hero-overlay-noise"></div>
      
      {/* Main Content */}
      <div className="container">
        <div className="hero-content">
          
          {/* Gradient Title */}
          <h1 className="hero-title">
            <span className="title-line">Breathe Freely.</span>
            <span className="title-line title-sub">Live Comfortably.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Experience the future of pest protection with our invisible magnetic mesh screens. 
            Perfect for families, pet owners, and anyone who loves fresh air without the bugs.
          </p>
          
          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary">
              <span className="btn-text">Get Free Quote</span>
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            
            <button className="btn btn-secondary">
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14.752 11.168L10.18 7.09999C9.49797 6.51999 8.49997 7.01999 8.49997 7.92999V16.07C8.49997 16.98 9.49797 17.48 10.18 16.9L14.752 12.832C15.345 12.333 15.345 11.667 14.752 11.168Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="btn-text">See How It Works</span>
            </button>
          </div>
          
          {/* Trust Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">5000+</div>
              <div className="stat-label">Homes Protected</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">99.8%</div>
              <div className="stat-label">Bug Free Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">24h</div>
              <div className="stat-label">Quick Installation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;