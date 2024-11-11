import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1 className="home-title">Luxury Rooms & Suites</h1>
        <p className="home-description">
          Guestrooms at our hotel offer luxury accommodation...
        </p>
        <img src="/images/suite.webp" alt="Hotel" className="home-image"/>
        <img src="/images/Executive-Suite.webp" alt="suite" className="home-image"/>
        <img src="/images/family.webp" alt="suite" className="home-image"/>
      </div>

      <div className="amenities-section">
        <h2>Hotel Amenities</h2>
        <ul className="amenities-list">
          <li>🌐 Free Wi-Fi</li>
          <li>🏊‍♂️ Outdoor Pool</li>
          <li>🍽 Fine Dining Restaurant</li>
          <li>💆 Spa Services</li>
          <li>🏋️‍♀️ Fitness Center</li>
        </ul>
      </div>

      <div className="testimonials-section">
        <h2>Guest Reviews</h2>
        <blockquote className="testimonial">
          "An unforgettable experience! The rooms were stunning..." - Jane Doe
        </blockquote>
        <blockquote className="testimonial">
          "The view from our suite was breathtaking..." - John Smith
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
