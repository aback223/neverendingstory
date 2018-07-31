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
        <div>
          <h1 className="signup-header">Sign Up</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label>
              Username
            </label>
            <input type="text" name="name" />
            <label>
              Email
            </label>
            <input type="text" name="email" />
            <label>
              Password
            </label>
            <input type="password" name="password" />
            <label>
              Confirm Password
            </label>
            <input type="password" name="confirm-password" />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    )
  }
}