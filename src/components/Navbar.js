import React, { Component } from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <div className="navbar-title">Never<br/>Ending<br/>Story</div>
      </div>
      <div className="bottom">
        <h1><a href="#">Link 1</a></h1>
        <h1><a href="#">Link 2</a></h1>
      </div>
    </div>
  )
};

export default Navbar;