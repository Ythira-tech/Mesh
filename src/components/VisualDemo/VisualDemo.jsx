import React, { useState } from 'react';
import './VisualDemo.css';

const VisualDemo = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="visual-demo" id="our-work">
      <div className="container">
        <div className="demo-header">
          <h2 className="demo-title">Before & After MeshGuard</h2>
          <p className="demo-subtitle">
            Click to see the transformation from bug problems to peaceful living
          </p>
        </div>

        <div className="toggle-demo">
          <div className="toggle-controls">
            <button 
              className={`toggle-btn ${!isAfter ? 'active' : ''}`}
              onClick={() => setIsAfter(false)}
            >
              <span className="toggle-text">
                <strong>Before</strong>
              </span>
            </button>
            
            <div className="toggle-switch">
              <div className={`switch-handle ${isAfter ? 'on' : 'off'}`}>
                <span>→</span>
              </div>
            </div>

            <button 
              className={`toggle-btn ${isAfter ? 'active' : ''}`}
              onClick={() => setIsAfter(true)}
            >
              <span className="toggle-text">
                <strong>After</strong>
              </span>
            </button>
          </div>

          <div className="toggle-image">
            <div className={`image-container ${isAfter ? 'after-active' : 'before-active'}`}>
              <div className="image-before">
                <img 
                  src="/assets/Fly.jpeg" 
                  alt="Door with insects entering"
                />
                <div className="problem-list">
                  <h4>Common Problems:</h4>
                  <ul>
                    <li>🦟 Mosquitoes entering</li>
                    <li>🐜 Flies and bugs</li>
                    <li>🍃 Limited fresh air</li>
                    <li>😟 Constant worrying</li>
                  </ul>
                </div>
              </div>
              
              <div className="image-after">
                <img 
                  src="/assets/After-mesh.jpeg" 
                  alt="Door protected with MeshGuard"
                />
                <div className="solution-list">
                  <h4>Benefits You Get:</h4>
                  <ul>
                    <li>✅ 99.8% bug protection</li>
                    <li>💨 Unlimited fresh air</li>
                    <li>👀 Nearly invisible</li>
                    <li>😊 Peace of mind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualDemo;