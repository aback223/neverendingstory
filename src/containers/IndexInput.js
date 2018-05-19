import React, { Component } from 'react';

class IndexInput extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }
  render() {
    return(
      <form className="indexInput">
        <input type="text" placeholder="Title" />
        <input type="submit" value="Create Story" />
      </form>
    )
  }
}

export default IndexInput;