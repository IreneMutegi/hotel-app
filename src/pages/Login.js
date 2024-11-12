import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons"; // Import Font Awesome icons
import "./Login.css"; // Import the CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  return (
    <div id="login-page">
      <div className="login-icon">
        <span role="img" aria-label="login-icon">🔑</span> {/* Placeholder for icon */}
      </div>
      <h2>Sign in with email</h2>
      <p>Sign in to manage your bookings, view exclusive offers, and more!</p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
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
        <button type="submit" className="login-button">Get Started</button>
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
  );
}

export default Login;
