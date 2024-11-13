import React, { useState, useEffect } from "react";
import "./Profile.css"; // Import Profile CSS

function Profile({ userInfo, allBookings }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user is logged in by checking localStorage
    const name = localStorage.getItem("clientName");
    const username = localStorage.getItem("clientUsername");

    if (name && username) {
      setUserData({ name, username });
    } else {
      // Redirect to login page if not logged in
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="profile-container">
      {userData ? (
        <>
          <div className="user-info">
            <h3>Welcome, {userData.name}</h3>
            <p>Email: {userData.username}</p>
          </div>

          <div className="bookings-section">
            <h3>Your Bookings:</h3>
            {allBookings.length > 0 ? (
              <ul>
                {allBookings.map((booking, index) => (
                  <li key={index}>{booking.room} - {booking.date}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-state">No bookings yet.</p>
            )}
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Profile;
