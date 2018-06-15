import React, { Component } from "react";
import { Link } from "react-router-dom";

const Splash =()=>(
  <div>
    <h1>Welcome!</h1>
    <Link to="/shop">
      <button className="btn">
        Log In
      </button>
    </Link>
  </div>
)

export default Splash;