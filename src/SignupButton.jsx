import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function SignupButton() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    
    <button 
      onClick={() => navigate("/signup")} // Navigate to login page
      className="signup-button"
    >
      Signup
    </button>
  );
}

export default SignupButton;
