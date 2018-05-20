import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({stories}) => 
  <div className="storyIndex">
    {stories.map(story => <Link to={"/stories/" + story.id} >{story.title}</Link>)}
  </div>

export default Index;
