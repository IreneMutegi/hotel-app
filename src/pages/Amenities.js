import React from 'react';
import './Amenities.css';
import pool from "../assets/images/outdoorpool.jpeg";  
import spa from "../assets/images/spaservice.jpeg";
import gym from "../assets/images/fitness.jpeg";
import canoeing from "../assets/images/canoeing.jpeg";
import finedining from "../assets/images/finedining.jpeg";

const amenitiesData = [
  {
    emoji: '🌐',
    title: 'Free Wi-Fi',
    description: 'Enjoy high-speed internet access throughout the hotel for all your work and entertainment needs.',
    image: null,
    buttonText: 'Access Now',  
  },
  {
    emoji: '🏊‍♂️',
    title: 'Outdoor Pool',
    description: 'Relax by our outdoor pool, offering a perfect spot for a refreshing swim and sunbathing.',
    image: pool,
    buttonText: 'Book Now',
  },
  {
    emoji: '🍽',
    title: 'Fine Dining Restaurant',
    description: 'Indulge in gourmet dishes prepared by world-class chefs in a luxurious dining setting.',
    image: finedining,
    buttonText: 'Book Now',
  },
  {
    emoji: '💆',
    title: 'Spa Services',
    description: 'Relax and rejuvenate with our variety of spa treatments designed to provide ultimate relaxation.',
    image: spa,
    buttonText: 'Book Now',
  },
  {
    emoji: '🏋️‍♀️',
    title: 'Fitness Center',
    description: 'Stay fit and healthy in our fully equipped fitness center, featuring the latest workout equipment.',
    image: gym,
    buttonText: 'Book Now',
  },
  {
    emoji: '🚣‍♀️',
    title: 'Canoeing',
    description: 'Explore the waters with our exciting canoeing experience.',
    image: canoeing,
    buttonText: 'Book Now',
  },
];

const Amenities = () => {
  return (
    <div className="amenities-container">
      <h2>Our Amenities</h2>
      <div className="amenities-list">
        {amenitiesData.map((amenity, index) => (
          <div key={index} className="amenity">
            <div className="amenity-header">
              <span className="emoji">{amenity.emoji}</span>
              <h3>{amenity.title}</h3>
            </div>
            {amenity.image && <img src={amenity.image} alt={amenity.title} className="amenity-image" />}
            <p>{amenity.description}</p>
            <button className="book-now-btn">{amenity.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
