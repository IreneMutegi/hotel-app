import React from 'react';

function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="home-title">Luxury Rooms & Suites</h1>
      <p className="home-description">
        Guestrooms at our hotel offer luxury accommodation...
      </p>
      <img src="/images/suite.webp" alt="Hotel" className="home-image" />
       <img src="/images/Executive-Suite.webp" alt="suite" className="home-image" />
      <img src="/images/family.webp" alt="alternate suite" className="home-image" />
</section>
  );
}

export default IntroSection;
