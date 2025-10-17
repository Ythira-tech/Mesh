import React, { useState } from 'react';
import './CTASection.css';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        projectType: '',
        message: ''
      });
    }, 2000);
  };

  const serviceAreas = [
    "Nairobi West", "Karen", "Westlands", "Lavington", "Runda", 
    "Kileleshwa", "Kilimani", "Upper Hill", "South B", "South C",
    "Parklands", "Ngong Road", "Thika Road", "Mombasa Road"
  ];

  if (isSubmitted) {
    return (
      <section className="cta-section">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">🎉</div>
            <h2>Thank You for Your Interest!</h2>
            <p>We've received your inquiry and will contact you within 24 hours to discuss your mesh solution.</p>
            <div className="success-details">
              <div className="success-item">
                <span className="item-icon">📞</span>
                <span>Expect a call from our expert team</span>
              </div>
              <div className="success-item">
                <span className="item-icon">💬</span>
                <span>We'll provide a free, no-obligation quote</span>
              </div>
              <div className="success-item">
                <span className="item-icon">⏱️</span>
                <span>Quick response guaranteed</span>
              </div>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cta-section" id="consultation">
      <div className="container">
        <div className="cta-content">
          {/* Left Side - Content */}
          <div className="cta-text">
            <div className="cta-badge">
              <span>✨</span>
              Limited Time Offer
            </div>
            
            <h2 className="cta-title">
              Ready for a 
              <span className="title-accent"> Bug-Free Home?</span>
            </h2>
            
            <p className="cta-subtitle">
              Get your free, no-obligation quote today and join hundreds of happy families enjoying fresh air without the bugs.
            </p>

            <div className="cta-features">
              <div className="feature">
                <div className="feature-icon">✅</div>
                <div className="feature-text">
                  <strong>Free Consultation</strong>
                  <span>Professional assessment at no cost</span>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <strong>24h Response</strong>
                  <span>Quick follow-up guaranteed</span>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🏆</div>
                <div className="feature-text">
                  <strong>Quality Guarantee</strong>
                  <span>5-year warranty on all installations</span>
                </div>
              </div>
            </div>

            <div className="cta-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Homes Protected</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">24h</div>
                <div className="stat-label">Installation Time</div>
              </div>
            </div>

            <div className="contact-methods">
              <h4>Prefer to contact directly?</h4>
              <div className="contact-buttons">
                <a href="tel:+254700000000" className="contact-btn phone">
                  <span className="btn-icon">📞</span>
                  <span className="btn-text">
                    <span>Call Us</span>
                    <span className="btn-detail">+254 700 000 000</span>
                  </span>
                </a>
                
                <a href="https://wa.me/254700000000" className="contact-btn whatsapp">
                  <span className="btn-icon">💬</span>
                  <span className="btn-text">
                    <span>WhatsApp</span>
                    <span className="btn-detail">Quick chat</span>
                  </span>
                </a>
                
                <a href="mailto:info@meshguardpro.com" className="contact-btn email">
                  <span className="btn-icon">✉️</span>
                  <span className="btn-text">
                    <span>Email</span>
                    <span className="btn-detail">info@meshguardpro.com</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="cta-form-container">
            <div className="form-header">
              <h3>Get Your Free Quote</h3>
              <p>Fill out this form and we'll contact you within hours</p>
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Your Location *</label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your area</option>
                  {serviceAreas.map((area, index) => (
                    <option key={index} value={area}>{area}</option>
                  ))}
                  <option value="other">Other Area</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">What Do You Need? *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="sliding-door">Sliding Door Mesh</option>
                  <option value="french-door">French Door Mesh</option>
                  <option value="window">Window Screens</option>
                  <option value="multiple">Multiple Openings</option>
                  <option value="consultation">Just Consultation</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your specific needs, number of doors/windows, pet concerns, etc."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Get Free Quote Now
                  </>
                )}
              </button>

              <div className="form-footer">
                <p>✅ No spam, no obligation. We respect your privacy.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;