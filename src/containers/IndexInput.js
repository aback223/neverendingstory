import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    const title = this.state.title
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

export default IndexInput;