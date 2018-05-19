import React, { Component } from 'react';
import IndexInput from './IndexInput';
import Index from '../components/Index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class IndexContainer extends Component {
  render() {
    return (
      <div className="indexContainer">
        <div className="topRight"><IndexInput /></div>
        <Index stories={this.props.stories} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories}
}

export default connect(mapStateToProps)(IndexContainer);