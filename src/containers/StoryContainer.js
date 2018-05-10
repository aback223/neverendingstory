import React, { Component } from 'react';
import Story from '../components/Story';
import StoryInput from './StoryInput';

class StoryContainer extends Component {
  render() {
    // return <Story contents={this.state.contents} />
    return (
    <div className="storyContainer">
      <div className="topRight"><StoryInput /></div>
      <Story />
    </div>
    )
  }
}

export default StoryContainer;