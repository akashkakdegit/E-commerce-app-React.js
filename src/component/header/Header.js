import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <text className="text">Sign up and get 20% off to your first order.</text>
      <a href="sign-up" className="sign-up-button">
        Sign Up Now
      </a>
    </div>
  );
};

export default Header;
