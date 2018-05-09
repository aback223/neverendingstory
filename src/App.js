import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
