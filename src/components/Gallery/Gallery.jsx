import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');

  const videoProjects = [
    {
      id: 1,
      title: "Sliding Door Installation",
      description: "Professional installation of magnetic mesh on large patio sliding door",
      video: "/videos/sliding-door-installation.mp4",
      thumbnail: "/assets/thumbnails/sliding-door.jpg",
      type: "installation",
      duration: "2:15",
      location: "Nairobi West",
      features: ["Quick Installation", "Perfect Fit", "Magnetic Seal"]
    },
    {
      id: 2,
      title: "French Door Transformation",
      description: "See how we transformed this French door with invisible protection",
      video: "/videos/french-door-transformation.mp4",
      thumbnail: "/assets/thumbnails/french-door.jpg",
      type: "transformation",
      duration: "1:45",
      location: "Karen",
      features: ["Elegant Design", "Easy Operation", "Pet Friendly"]
    },
    {
      id: 3,
      title: "Window Screen Installation",
      description: "Quick and clean window mesh installation process",
      video: "/videos/window-installation.mp4",
      thumbnail: "/assets/thumbnails/window.jpg",
      type: "installation",
      duration: "1:30",
      location: "Westlands",
      features: ["Precise Measurement", "Clean Finish", "Discreet Look"]
    },
    {
      id: 4,
      title: "Pet-Friendly Mesh Demo",
      description: "Showing how our mesh stands up to active pets",
      video: "/videos/pet-demo.mp4",
      thumbnail: "/assets/thumbnails/pet-demo.jpg",
      type: "demo",
      duration: "2:30",
      location: "Lavington",
      features: ["Durable Material", "Pet Safe", "Easy Cleaning"]
    },
    {
      id: 5,
      title: "Before & After Comparison",
      description: "Customer testimonial showing the difference MeshGuard makes",
      video: "/videos/before-after.mp4",
      thumbnail: "/assets/thumbnails/before-after.jpg",
      type: "testimonial",
      duration: "3:15",
      location: "Runda",
      features: ["Real Results", "Customer Review", "Quality Proof"]
    },
    {
      id: 6,
      title: "Custom Door Solution",
      description: "Custom-fit mesh for unique door shapes and sizes",
      video: "/videos/custom-door.mp4",
      thumbnail: "/assets/thumbnails/custom-door.jpg",
      type: "installation",
      duration: "2:45",
      location: "Kileleshwa",
      features: ["Custom Fit", "Professional Craftsmanship", "Perfect Seal"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'installation', label: 'Installations' },
    { key: 'transformation', label: 'Transformations' },
    { key: 'demo', label: 'Demos' },
    { key: 'testimonial', label: 'Testimonials' }
  ];

  const filteredVideos = filter === 'all' 
    ? videoProjects 
    : videoProjects.filter(video => video.type === filter);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">See Our Work in Action</h2>
          <p className="gallery-subtitle">
            Real installations, real results. Watch how we transform homes with MeshGuard protection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.key)}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <div key={video.id} className="video-card">
              <div 
                className="video-thumbnail"
                onClick={() => openVideo(video)}
              >
                {/* Fallback thumbnail image */}
                <div className="thumbnail-placeholder">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.9"/>
                      <path d="M10 8L16 12L10 16V8Z" fill="#3B82F6"/>
                    </svg>
                  </div>
                </div>
                
                <div className="video-overlay">
                  <div className="video-duration">{video.duration}</div>
                  <div className="video-type">{video.type}</div>
                </div>
              </div>

              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                
                <div className="video-location">
                  <span className="location-icon">📍</span>
                  {video.location}
                </div>

                <div className="video-features">
                  {video.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="gallery-stats">
          <div className="gallery-stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Successful Installations</div>
          </div>
          <div className="gallery-stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="gallery-stat">
            <div className="stat-number">24h</div>
            <div className="stat-label">Quick Service</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="video-player">
              <video 
                controls 
                autoPlay 
                poster={selectedVideo.thumbnail}
                className="modal-video"
              >
                <source src={selectedVideo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="modal-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
              
              <div className="modal-details">
                <div className="detail">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{selectedVideo.location}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{selectedVideo.duration}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Type:</span>
                  <span className="detail-value">{selectedVideo.type}</span>
                </div>
              </div>

              <div className="modal-features">
                <h4>Key Features:</h4>
                <div className="features-list">
                  {selectedVideo.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✅</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;