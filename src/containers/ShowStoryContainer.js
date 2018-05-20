import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStoryById } from '../actions/story';
import StoryContainer from './StoryContainer';

class ShowStoryContainer extends Component {
  componentDidMount() {
    this.props.fetchStoryById(this.props.match.params.id)
  }

  render() {
    let contents;

    if (this.props.story !== undefined ) {
      contents = 
        <div className="showStory">
          <StoryContainer title={this.props.story.title} contents={this.props.story.contents}/>
        </div>
    } else {
      contents = 
        <div className="showStory">
          Nothing to see here. 
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