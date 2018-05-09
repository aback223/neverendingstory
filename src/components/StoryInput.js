import React, { Component } from 'react';

class StoryInput extends Component {
  render() {
    return (
      <form className="storyInput">
        <textarea
          type="text" 
          placeholder="What do you think should happen next?"/>
        <input type="submit" />
      </form>
    )
  }
}

export default StoryInput;