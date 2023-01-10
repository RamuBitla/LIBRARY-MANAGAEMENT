import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";

import "./HeroStyle.css"

const Hero = () => {
  return (
    <div className="header">

      <div className="headermain">
        <img src={logo} alt="logo" />
        <h1>LIBRARY MANAGEMENT SOFTWARE</h1>
      </div>

      <div className="headercenter">
        <button>
          <Link to="/register">STUDENT REGISTRATION</Link>
        </button>
        
        <button>
          
          <Link to="/login">STUDENT LOGIN</Link>
        </button>
      </div>

    </div>
  );
};

export default Hero;
