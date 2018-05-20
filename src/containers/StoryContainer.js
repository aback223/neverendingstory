import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import PropTypes from 'prop-types';
import { fetchStory } from '../actions/story';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryContainer extends Component {
  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
  }

  render() {
    return (
    <div className="storyContainer">
      <div className="showStoryTitle">
        <label><strong>Title:</strong></label> {this.props.title}
      </div>
      <div className="topRight">
        <StoryInput storyId={this.props.storyId}/>
      </div>
      <StoryContents contents={this.props.contents} />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStory: fetchStory
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { contents: state.contents }
}

StoryContainer.defaultProps = {
  contents: []
};

StoryContainer.propTypes = {
  contents: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);