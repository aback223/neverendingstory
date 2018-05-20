import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({stories}) => 
  <div className="storyIndex">
    <ul>{stories.map(story => <li><Link to={"/stories/" + story.id}>{story.title}</Link></li>)}</ul>
  </div>

export default Index;
