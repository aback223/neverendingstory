import React, { Component } from 'react'; 

class LoginContainer extends Component {
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
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}