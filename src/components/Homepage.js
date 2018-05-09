import React, { Component } from 'react';
import Navbar from './Navbar';
import StoryContainer from '../containers/StoryContainer';
import StoryInput from './StoryInput';

class Homepage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <Navbar />
        <StoryContainer />
      </div>
    );
  }
}

export default Homepage;