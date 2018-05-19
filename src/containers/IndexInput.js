import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStory } from '../actions/story';

class IndexInput extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const title = {...this.state}
    this.props.addStory(title)
    this.setState({
      title: ''
    })
  }

  render() {
    return(
      <form className="indexInput" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange} />
        <input type="submit" value="Create Story" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStory: addStory
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(IndexInput);