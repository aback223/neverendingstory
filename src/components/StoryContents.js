import React from 'react';
import Content from './Content';

const StoryContents = ({ contents }) => {

  return (
    <div className="bottomContent">
      {contents.map(content => <Content content={content}/>)}
    </div>
  )
}


export default StoryContents;