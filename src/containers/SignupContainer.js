import React, { Component } from 'react';

export default class SignupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-wrapper">
          <h1 className="signup-header">Sign Up</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label>
              Username
            </label>
            <input 
              type="text" 
              name="name"
              value={this.state.username} 
              onChange={this.handleChange}
            />
            <label>
              Email
            </label>
            <input 
              type="text" 
              name="email" 
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange}
            />
            <label>
              Confirm Password
            </label>
            <input 
              type="password" 
              name="confirm-password"
              value={this.state.confirmPass} 
              onChange={this.handleChange}
            />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    )
  }
}