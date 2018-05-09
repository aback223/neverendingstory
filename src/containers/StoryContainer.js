import React, { Component } from 'react';
import Story from '../components/Story';
import StoryInput from '../components/StoryInput';

class StoryContainer extends Component {
  render() {
    // return <Story contents={this.state.contents} />
    return (
    <div className="storyContainer">
      <div className="topRight"><div>
      <div className="bottom">
        <Story />
        <StoryInput />
      </div>
    </div>
    )
  }
}

export default StoryContainer;