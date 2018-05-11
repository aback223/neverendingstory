import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import { connect } from 'react-redux';

class StoryContainer extends Component {
  render() {
    return (
    <div className="storyContainer">
      <div className="topRight"><StoryInput /></div>
      <StoryContents contents={this.props.contents} />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { contents: state.contents };
};

export default connect(mapStateToProps)(StoryContainer);