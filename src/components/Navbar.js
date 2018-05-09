import React, { Component } from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <div className="navbar-title">Never<br/>Ending<br/>Story</div>
      </div>
      <div className="bottom">
        <h3><a href="#">Link 1</a></h3>
        <h3><a href="#">Link 2</a></h3>
      </div>
    </div>
  )
};

export default Navbar;