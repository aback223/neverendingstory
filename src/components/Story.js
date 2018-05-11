import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {
  render() {
    return (
      <div className="bottomContent">
        Once upon a time...
      </div>)
  }
}

const mapStateToProps = (state) => {
  return { content: state.content };
};

export default connect(mapStateToProps)(Story);