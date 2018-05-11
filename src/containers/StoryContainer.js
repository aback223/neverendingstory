import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';

class StoryContainer extends Component {
  render() {
    return (
    <div className="storyContainer">
      <div className="topRight"><StoryInput /></div>
      <StoryContents />
    </div>
    )
  }
}

export default StoryContainer;