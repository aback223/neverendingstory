import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Homepage;