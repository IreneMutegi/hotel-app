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
  };

  // Add new booking to the allBookings state
  const handleNewBooking = (bookingData) => {
    setAllBookings((prevBookings) => [...prevBookings, bookingData]);
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
       path="/amenities"
          element={<Amenities setBookingInfo={handleNewBooking} />}
       />

        <Route
          path="/profile"
          element={<Profile userInfo={userInfo} allBookings={allBookings} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
