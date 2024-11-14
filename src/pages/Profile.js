import React, { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Retrieve user ID from localStorage
    const userName = localStorage.getItem("clientName");
    const userEmail = localStorage.getItem("clientUsername");

    if (userName && userEmail) {
      // Fetch user details
      setUser({ name: userName, email: userEmail });

      // Fetch bookings related to this user
      fetch(`http://localhost:5000/bookings?clientEmail=${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          setBookings(data);
          // Filter and store booked amenities
          const bookedAmenities = data.filter((booking) => booking.amenity);
          setAmenities(bookedAmenities);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
          setErrorMessage("An error occurred while fetching bookings.");
        });
    } else {
      setErrorMessage("No user logged in.");
    }
  }, []);

  if (errorMessage) return <p>{errorMessage}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            <h3>{booking.room || booking.amenity}</h3>
            <p>{booking.description}</p>
            <p>Cost: {booking.cost}</p>
            <p>Date: {booking.bookingDate}</p>
            <p>Time: {booking.bookingTime}</p>
          </li>
        ))}
      </ul>

      <h2>Booked Amenities</h2>
      <ul>
        {amenities.map((amenity, index) => (
          <li key={index}>
            <h3>{amenity.amenity}</h3>
            <p>Date: {amenity.bookingDate}</p>
            <p>Time: {amenity.bookingTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
