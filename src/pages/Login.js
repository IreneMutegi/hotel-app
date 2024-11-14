import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/slide3.jpeg";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name || !username || !password) {
      setError("Please fill out all fields"); // Set error message
      return;
    }

    const loginData = { name, username, password };

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("clientName", user.name);
        localStorage.setItem("clientUsername", user.username);
        onLogin(user);
        navigate("/profile");
      } else {
        setError("Login failed. Please check your credentials."); // Update error message on failure
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("There was an error during login.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="login-container">
      <div className="slideshow-container">
        <img src={slides[currentSlide]} alt="Hotel Slideshow" className="slideshow-image" />
        <div className="caption">We hope you enjoy your vacation</div>
      </div>

      <div className="login-form-container">
        <h2>Welcome to the Luxury Hotel login page</h2>
        <p>Keep up with all your activities. Are you new here? <a href="/register">Create an Account</a></p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            aria-label="Name"
          />
          <input
            type="text"
            placeholder="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            aria-label="Email Address"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            aria-label="Password"
          />
          <a href="#" className="forgot-password">Forgot password?</a>

          {error && <div className="error-message">{error}</div>} {/* Error message */}

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="social-login">
          <p>Or sign in with</p>
          <div className="social-icons">
            <button className="social-button google">
              <FontAwesomeIcon icon={faGoogle} /> Google
            </button>
            <button className="social-button facebook">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </button>
            <button className="social-button apple">
              <FontAwesomeIcon icon={faApple} /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;