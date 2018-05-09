import React, { Component } from 'react';
import Navbar from './Navbar';
import StoryContainer from '../containers/StoryContainer'

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <StoryContainer />
      </div>
    );
  }
}

export default Homepage;