import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState(null); // Store logged-in user's info
  const [allBookings, setAllBookings] = useState([]); // Store all booking details

  // Handle user login
  const handleLogin = (user) => {
    setUserInfo(user); // Set user info after login
    localStorage.setItem("userInfo", JSON.stringify(user)); // Persist user info to localStorage
  };

  // Handle user logout
  const handleLogout = () => {
    setUserInfo(null); // Clear user info from state
    localStorage.removeItem("userInfo"); // Remove user info from localStorage
  };

  // Add new booking to the allBookings state
  const handleNewBooking = (bookingData) => {
    setAllBookings((prevBookings) => [...prevBookings, bookingData]);
  };

  // Check if user is already logged in when app loads
  React.useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo)); // Set user info from localStorage if available
    }
  }, []);

  return (
    <div className="App">
      <Header onLogout={handleLogout} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/amenities"
          element={<Amenities setBookingInfo={handleNewBooking} />}
        />
        <Route
          path="/profile"
          element={
            userInfo ? (
              <Profile userInfo={userInfo} allBookings={allBookings} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
