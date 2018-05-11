import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryContents extends Component {
  render() {
    return (
      <div className="bottomContent">
        Once upon a time...

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { contents: state.contents };
};

export default connect(mapStateToProps)(StoryContents);