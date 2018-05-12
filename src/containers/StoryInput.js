import React, { Component } from 'react';
import { addContent } from '../actions/contents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryInput extends Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const content = {...this.state}
    this.props.addContent(content)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <form className="storyInput" onSubmit={this.handleSubmit}>
        <textarea
          type="text" 
          name="content"
          placeholder="What happens next?"
          value={this.state.content}
          onChange={this.handleChange}/>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addContent: addContent
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(StoryInput);