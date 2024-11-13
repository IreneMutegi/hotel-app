import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";  // Import useNavigate for routing
import "./Login.css";
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/slide3.jpeg";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name || !username || !password) {
      alert("Please fill out all fields");
      return;
    }

    const loginData = {
      name,
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const user = await response.json(); // Assume the server returns the user data
        localStorage.setItem("clientName", user.name);
        localStorage.setItem("clientUsername", user.username);

        // Update the App state with user info
        onLogin(user);

        // Redirect to Profile page
        navigate("/profile");
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("There was an error during login.");
    }
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="login-container">
      {/* Left side: Slideshow */}
      <div className="slideshow-container">
        <img src={slides[currentSlide]} alt="Hotel Slideshow" className="slideshow-image" />
        <div className="caption">We hope you enjoy your vacation</div>
      </div>

      {/* Right side: Login form */}
      <div className="login-form-container">
        <h2>Welcome to the Luxury Hotel login page</h2>
        <p>Keep up with all your activities. Are you new here? <a href="#">Create an Account</a></p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />
          <input
            type="text"
            placeholder="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <a href="#" className="forgot-password">Forgot password?</a>
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
