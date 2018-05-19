import React, { Component } from 'react';

class IndexContainer extends Component {
  render() {
    return (
      <div className="indexContainer">
        <div className="topRight"><IndexInput /></div>
        <Index />
      </div>
    )
  }
}

export default IndexContainer;