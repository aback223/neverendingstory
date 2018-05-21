import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStoryById } from '../actions/story';
import StoryContainer from './StoryContainer';
import Unavailable from '../components/Unavailable';

class ShowStoryContainer extends Component {
  componentDidMount() {
    this.props.fetchStoryById(this.props.match.params.id)
  }

  render() {
    let contents;

    if (this.props.story !== undefined ) {
      contents = 
        <div className="showStory">
          <StoryContainer title={this.props.story.title} storyId={this.props.story.id} />
        </div>
    } else if (this.props.story === undefined) {
      contents = 
        <div className="unavailable">
          <Unavailable />
        </div>
    }

    return contents;
  }
}

const mapStateToProps = (state) => {
  return { story: state.story }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStoryById: fetchStoryById
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowStoryContainer);