import React from 'react';

const Index = ({stories}) => 
  <div className="storyIndex">
    {stories.length > 0 ? stories.map(story => <li>{story.title}</li>) : ''}
  </div>

export default Index;
