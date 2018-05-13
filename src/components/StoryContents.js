import React, { Component } from 'react';
import Content from './Content';

class StoryContents extends Component {
  render() {
    const { contents } = this.props;
    return (
      <div className="bottomContent">
        William Pigeon had always loved industrial Chicago with its cold, confused cliffs. It was a place where he felt puzzled.
        {contents.map(content => <Content content={content} />)}
      </div>
    )
  }
}

export default StoryContents;