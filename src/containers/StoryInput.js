import React, { Component } from 'react';

class StoryInput extends Component {
  render() {
    return (
      <form className="storyInput">
        <textarea
          type="text" 
          placeholder="What happens next?"/>
        <input type="submit" />
      </form>
    )
  }
}

export default StoryInput;