import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"; // Import Footer component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
