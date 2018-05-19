import React, { Component } from 'react';
import IndexInput from './IndexInput';
import Index from '../components/Index';

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