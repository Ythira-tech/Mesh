import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';
import FeaturesShowcase from './components/FeaturesShowcase/FeaturesShowcase';
import VisualDemo from './components/VisualDemo/VisualDemo';
import SolutionFinder from './components/SolutionFinder/SolutionFinder';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Navbar />
      <FeaturesShowcase />
      <VisualDemo />
      <SolutionFinder />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;