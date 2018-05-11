import React, { Component } from 'react';
import { addContent } from '../actions/contents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryInput extends Component {
  constructor(props) {
    super(props)
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
    
  }

  render() {
    return (
      <form className="storyInput" onSubmit={this.handleSubmit}>
        <textarea
          type="text" 
          name="content"
          placeholder="What happens next?"
          value={this.props.content}
          onChange={this.handleChange}/>
        <input type="submit" />
        {this.props.content}
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { content: state.content };
};

export default connect(mapStateToProps)(StoryInput);