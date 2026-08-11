import React from 'react';
import './FeaturesShowcase.css';

const FeaturesShowcase = () => {
  const features = [
    {
      id: 1,
      title: '98% Bug Protection',
      description: 'Our fine mesh blocks even the smallest insects while allowing fresh air to flow freely. Experience peace of mind knowing your home is protected from mosquitoes, flies, and other pests without compromising on ventilation.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Bug protection mesh'
    },
    {
      id: 2,
      title: 'Magnetic Magic',
      description: 'Easy on, easy off magnetic system for effortless cleaning and maintenance. Our innovative magnetic technology ensures a perfect seal every time, keeping bugs out while letting fresh air in.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Magnetic mesh system'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose MeshGuard Pro?</h2>
        </div>
        
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={feature.id} className={`feature-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              <div className="feature-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.imageAlt} 
                  className="feature-image"
                />
                <div className="feature-icon-overlay">{feature.icon}</div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;