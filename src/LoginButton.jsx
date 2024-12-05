import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function LoginButton() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    
    <button 
      onClick={() => navigate("/login")} // Navigate to login page
      className="login-button"
    >
      Login
    </button>
  );
}

export default LoginButton;
