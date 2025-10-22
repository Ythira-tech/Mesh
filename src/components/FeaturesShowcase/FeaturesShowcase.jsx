import React from 'react';
import './FeaturesShowcase.css';

const FeaturesShowcase = () => {
  const features = [
    {
      position: 'top-left',
      title: '98% Bug Protection',
      description: 'Our fine mesh blocks even the smallest insects while allowing fresh air to flow freely.',
      icon: '🛡️'
    },
    {
      position: 'top-right',
      title: 'Magnetic Magic',
      description: 'Easy on, easy off magnetic system for effortless cleaning and maintenance.',
      icon: '🧲'
    },
    {
      position: 'bottom-left',
      title: 'Quick Installation',
      description: 'Professional installation in hours, not days. No drilling or permanent modifications.',
      icon: '⚡'
    },
    {
      position: 'bottom-right',
      title: 'Custom Fit',
      description: 'Precisely measured for your doors and windows. Perfect fit guaranteed.',
      icon: '📐'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose MeshGuard Pro?</h2>
          <p className="features-subtitle">Premium protection meets elegant design</p>
        </div>
        
        <div className="swot-grid">
          {features.map((feature, index) => (
            <div key={index} className={`swot-card ${feature.position}`}>
              <div className="swot-icon">{feature.icon}</div>
              <h3 className="swot-title">{feature.title}</h3>
              <p className="swot-description">{feature.description}</p>
            </div>
          ))}
          
          <div className="swot-center">
            <div className="center-content">
              <span className="center-main">MESH</span>
              <span className="center-sub">GUARD</span>
              <div className="center-pro">PRO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;