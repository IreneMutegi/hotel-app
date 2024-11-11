import React from 'react';
import './Rooms.css';

function Rooms() {
  return (
    <div className="booking-container">
     

      {/* Additional room images with descriptions and booking buttons */}
      <div className="additional-images">
        <div className="image-item">
          <img src="/images/suite.webp" alt="Ocean View Suite" className="additional-image"/>
          <p className="image-description">
          The Ocean View Suite offers an unparalleled luxury experience, providing stunning panoramic views of the vast ocean horizon. Designed with sophistication in mind, this suite combines modern comfort with elegant design, making it the perfect choice for both relaxation and business stays.</p>
          <button className="book-now-button">Book Now</button>
        </div>
        
        <div className="image-item">
          <img src="/images/Executive-Suite.webp" alt="Executive Suite" className="additional-image"/>
          <p className="image-description">The Executive Suite is designed for the discerning guest who demands both comfort and style. With an elegant layout and an array of upscale amenities, this suite provides the perfect setting for both business and leisure. Offering ample space, modern design, and panoramic views, the Executive Suite is ideal for guests seeking both privacy and luxury.e</p>
          <button className="book-now-button">Book Now</button>
        </div>
        
        <div className="image-item">
          <img src="/images/Garden-Studio.webp" alt="Garden Studio" className="additional-image"/>
          <p className="image-description">The Garden Studio Room offers a calm and intimate setting, with expansive windows that overlook the lush hotel gardens. This room features contemporary design with natural elements, making it a perfect choice for nature lovers or those seeking tranquility in a serene environment.</p>
          <button className="book-now-button">Book Now</button>
        </div>
        
        <div className="image-item">
          <img src="/images/Golf-View.webp" alt="Golf View Room" className="additional-image"/>
          <p className="image-description">The Golf View Room offers a peaceful and serene environment with sweeping views of the hotel's lush golf course. Designed to blend modern luxury with natural surroundings, this room provides the perfect setting for relaxation. Whether you’re watching golfers on the green or enjoying the tranquil scenery, this room is your ideal escape.</p>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
