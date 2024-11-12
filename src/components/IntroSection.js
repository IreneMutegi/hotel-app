import React from 'react';
import ExecutiveSuiteImage from '../assets/images/Executive-Suite.webp';  
import FamilySuiteImage from '../assets/images/family.webp';  
import GardenStudio from '../assets/images/Golf-View.webp'
function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="home-title">Luxury Rooms & Suites</h1>
      <p className="home-description">
        Guestrooms at our hotel offer luxury accommodation and relaxation...
      </p>
      <img src={ExecutiveSuiteImage} alt="Hotel" className="home-image" />
      <img src={GardenStudio} alt="suite" className="home-image" />
      <img src={FamilySuiteImage} alt="alternate suite" className="home-image" />
    </section>
  );
}

export default IntroSection;
