import React, { Component } from 'react';
import Navbar from './Navbar';
import StoryContainer from '../containers/StoryContainer';
import StoryInput from './StoryInput';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <StoryContainer />
        <StoryInput />
      </div>
    );
  }
}

export default Homepage;