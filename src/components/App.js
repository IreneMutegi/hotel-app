import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Rooms from "./Rooms";
import BookingForm from "./BookingForm";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
