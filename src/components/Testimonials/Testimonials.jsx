import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Nairobi West",
      rating: 5,
      text: "MeshGuard completely transformed our home! We can finally enjoy our patio doors without worrying about mosquitoes. The installation was quick and professional.",
      image: "👩‍👧‍👦",
      category: "Family Home",
      beforeAfter: "Had constant mosquito problems, now bug-free"
    },
    {
      id: 2,
      name: "Mike & Lisa Chen",
      location: "Karen",
      rating: 5,
      text: "Our cats love watching birds through the mesh, and we love not having flies in the house. The magnetic closure is so convenient for our pets.",
      image: "🐱",
      category: "Pet Owners",
      beforeAfter: "Pets could tear screens, now durable and pet-safe"
    },
    {
      id: 3,
      name: "David Omondi",
      location: "Westlands",
      rating: 5,
      text: "Professional service from start to finish. The team arrived on time, installed everything perfectly, and cleaned up after. Highly recommended!",
      image: "🏠",
      category: "Office Installation",
      beforeAfter: "Office was stuffy, now fresh air all day"
    },
    {
      id: 4,
      name: "Grace Wambui",
      location: "Lavington",
      rating: 5,
      text: "I was skeptical at first, but MeshGuard has been life-changing. No more waking up with mosquito bites. The quality is outstanding.",
      image: "✨",
      category: "Apartment Living",
      beforeAfter: "Couldn't open windows, now fresh air 24/7"
    },
    {
      id: 5,
      name: "Robert Kimani",
      location: "Runda",
      rating: 5,
      text: "The custom fit for our French doors is perfect. It looks so discreet you barely notice it's there, but the protection is incredible.",
      image: "🚪",
      category: "French Door Installation",
      beforeAfter: "Bugs through door gaps, now complete seal"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Loved by Hundreds of Families</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from happy MeshGuard customers
          </p>
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <div className="stat-numb">500+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat-numb">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat">
            <div className="stat-numb">98%</div>
            <div className="stat-label">Recommend Us</div>
          </div>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              
              <div className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="author-info">
                  <div className="author-name">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="author-location">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="author-category">
                    {testimonials[currentTestimonial].category}
                  </div>
                </div>
              </div>

              <div className="testimonial-rating">
                <span className="stars">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </span>
                <span className="rating-text">Perfect!</span>
              </div>

              <div className="testimonial-transformation">
                <div className="transformation-before">
                  <span className="transformation-label">Before:</span>
                  <span>{testimonials[currentTestimonial].beforeAfter.split(', ')[0]}</span>
                </div>
                <div className="transformation-arrow">→</div>
                <div className="transformation-after">
                  <span className="transformation-label">After:</span>
                  <span>{testimonials[currentTestimonial].beforeAfter.split(', ')[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-controls">
            <button className="control-btn prev-btn" onClick={prevTestimonial}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>

            <button className="control-btn next-btn" onClick={nextTestimonial}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="trust-badges">
          <div className="trust-badge">
            <div className="badge-icon">✅</div>
            <div className="badge-text">Verified Reviews</div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">🏆</div>
            <div className="badge-text">Quality Guaranteed</div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">📞</div>
            <div className="badge-text">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;