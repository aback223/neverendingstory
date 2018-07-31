import React, { Component } from 'react'; 

export default class LoginContainer extends Component {
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
      <div className="login-container">
        <div>
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}