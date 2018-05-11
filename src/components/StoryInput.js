import React, { Component } from 'react';
import { addContent } from '../actions/contents';
import { connect } from 'react-redux';

class StoryInput extends Component {
  constructor() {
    super()
    this.state = {
      content: []
    }
  }

  handleChange = event => {
    this.setState({
      content: [...event.target.value]
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch(addContent(content));
  }

  render() {
    return (
      <div>
      <form className="storyInput" onSubmit={this.handleSubmit}>
        <textarea
          type="text" 
          placeholder="What happens next?"
          onChange={this.handleChange}/>
        <input type="submit" />
      </form>
      {this.state.content}
      </div>
    )
  }
}


export default connect(mapStateToProps)(StoryInput);