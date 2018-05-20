import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import PropTypes from 'prop-types';

class StoryContainer extends Component {
  render() {
    return (
    <div className="storyContainer">
      <div className="topRight">
        <div className="showStoryTitle">Title: {this.props.title}</div>
        <StoryInput />
      </div>
      <StoryContents contents={this.props.contents} />
    </div>
    )
  }
}

StoryContainer.defaultProps = {
  contents: []
};

StoryContainer.propTypes = {
  contents: PropTypes.array
};

export default StoryContainer;