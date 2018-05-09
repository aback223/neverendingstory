import React, { Component } from 'react';
import '../App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topLeft">
        <h1 className="navbar-title">NeverEndingStory</h1>
      </div>
      <div className="bottom">
        <h3><a href="#">Link 1</a></h3>
        <h3><a href="#">Link 2</a></h3>
      </div>
    </div>
  )
};

export default Navbar;