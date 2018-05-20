import React from 'react';

const Index = ({stories}) => 
  <div className="storyIndex">
    {stories.map(story => <li>{story.title}</li>)}
  </div>

export default Index;
