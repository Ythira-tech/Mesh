import React from 'react';
import './FeaturesShowcase.css';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: '🛡️',
      title: '99.8% Bug Protection',
      description: 'Our fine mesh blocks even the smallest insects while allowing fresh air to flow freely.'
    },
    {
      icon: '🧲',
      title: 'Magnetic Magic',
      description: 'Easy open and close with strong magnets. Perfect for pets, kids, and busy families.'
    },
    {
      icon: '⚡',
      title: 'Quick Installation',
      description: 'Professional installation in hours, not days. No drilling or permanent modifications.'
    },
    {
      icon: '🎯',
      title: 'Custom Fit',
      description: 'Precisely measured for your doors and windows. Perfect fit guaranteed.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose MeshGuard Pro?</h2>
          <p className="features-subtitle">
            Experience the perfect blend of innovation, quality, and convenience
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;