import React, { Component } from 'react';
import Story from '../components/Story';

class StoryContainer extends Component {
  render() {
    return <Story contents={this.state.contents} />
  }
}

export default StoryContainer;