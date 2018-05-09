import React, { Component } from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <div className="navbar-title">Never<br/>Ending<br/>Story</div>
      </div>
      <div className="bottom">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  )
};

export default Navbar;