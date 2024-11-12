import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./components/Header";
import NavBar from "./components/NavBar"; 

function App() {
  return (
    <Router>
      <Header />
      <NavBar />  
      <Routes>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
