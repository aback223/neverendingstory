import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({stories}) => 
  <div className="storyIndex">
    {stories.map(story => <li><Link to={"/stories/" + story.id} >{story.title}</Link></li>)}
  </div>

export default Index;
