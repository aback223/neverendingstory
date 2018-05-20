import React from 'react';
import { Link } from 'react-router-dom';

const Index = ({stories}) => 
  <div className="storyIndex">
    {stories.map(story => <Link to={"/stories/" + story.id} >{story.title}<br/></Link>)}
  </div>

export default Index;
