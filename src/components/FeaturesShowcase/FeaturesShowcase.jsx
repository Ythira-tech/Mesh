import React from 'react';
import './FeaturesShowcase.css';

const FeaturesShowcase = () => {
  const features = [
    {
      position: 'top-left',
      title: '98% Bug Protection',
      description: 'Our fine mesh blocks even the smallest insects while allowing fresh air to flow freely.'
    },
    {
      position: 'top-right',
      title: 'Magnetic Magic',
      description: 'Our fine mesh blocks even the smallest insects while allowing fresh air to flow freely.'
    },
    {
      position: 'bottom-left',
      title: 'Quick Installation',
      description: 'Professional installation in hours, not days. No drilling or permanent modifications.'
    },
    {
      position: 'bottom-right',
      title: 'Custom Fit',
      description: 'Precisely measured for your doors and windows. Perfect fit guaranteed.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose MeshGuard Pro?</h2>
        </div>
        
        <div className="swot-grid">
          {features.map((feature, index) => (
            <div key={index} className={`swot-card ${feature.position}`}>
              <h3 className="swot-title">{feature.title}</h3>
              <p className="swot-description">{feature.description}</p>
            </div>
          ))}
          
          <div className="swot-center">
            <div className="center-content">
              <span className="center-main">MESH</span>
              <span className="center-sub">GUARD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;