import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import PropTypes from 'prop-types';

class StoryContainer extends Component {
  render() {
    return (
    <div className="storyContainer">
      <div className="showStoryTitle">
        <label><strong>Title:</strong></label> {this.props.title}
      </div>
      <div className="topRight">
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