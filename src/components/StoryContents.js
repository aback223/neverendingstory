import React from 'react';
import Content from './Content';

const StoryContents = ({ contents }) => {

  return (
    <div className="bottomContent">
      William Pigeon had always loved industrial Chicago with its cold, confused cliffs. It was a place where he felt puzzled.{"\n\n"}
      {contents.map(content => <Content content={content}/>)}
    </div>
  )
}


export default StoryContents;