import React, { Component } from 'react';
import IndexInput from './IndexInput';
import Index from '../components/Index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/story';
import PropTypes from 'prop-types';

class IndexContainer extends Component {
  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    return (
      <div className="indexContainer">
        <div className="topRight"><IndexInput /></div>
        <Index stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStories: fetchStories
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);