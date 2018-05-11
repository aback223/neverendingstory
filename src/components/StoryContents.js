import React, { Component } from 'react';
import Content from './Content';

class StoryContents extends Component {
  render() {
    const { contents } = this.props;
    return (
      <div className="bottomContent">
        Once upon a time...
        {contents.map(content => <Content content={content} />)}
      </div>
    )
  }
}

export default StoryContents;