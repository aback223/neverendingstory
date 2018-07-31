import React, { Component } from 'react'

class Like extends Component {
  constructor() {
    super()
    this.state = {
      like: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.setState({
      like: this.state.like + 1
    })
  }

  callApi = () => {
    console.log('a')
    fetch('http://localhost:3000/story_contents')
    .then(response => {
      console.log('b')

      return response.json()
    })
    .then(jsonresp => console.log('c', jsonresp))
    .catch(error => console.log('d', error))
    console.log('e')

    // a e b c+jsonresp 
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChange}>
          Like
        </button> 
        {this.state.like}
        <button onClick={this.callApi}>
          Call Api
        </button>
      </div>
    )
  }
 }

export default Like;