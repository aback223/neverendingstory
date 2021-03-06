import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import { fetchContents } from '../actions/contents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryContainer extends Component {
  componentDidMount() {
    this.props.fetchContents(this.props.storyId)
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
      {this.props.contents.status ? '' : <StoryContents contents={this.props.contents}/>}
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContents: fetchContents
  }, dispatch)
}

const mapStateToProps = (state) => {
  return { contents: state.contents }
}

StoryContainer.defaultProps = {
  contents: []
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);