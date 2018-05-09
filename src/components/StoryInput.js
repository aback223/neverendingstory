import React, { Component } from 'react';

class StoryInput extends Component {
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="What do you think should happen next?"/>
      </form>
    )
  }
}

export default StoryInput;