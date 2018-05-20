import React, { Component } from 'react';
import StoryContents from '../components/StoryContents';
import StoryInput from './StoryInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContents } from '../actions/contents';
import PropTypes from 'prop-types';

class StoryContainer extends Component {
  componentDidMount() {
    this.props.fetchContents()
  }

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContents: fetchContents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);