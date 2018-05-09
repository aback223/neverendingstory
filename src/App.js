import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoryContainer from './containers/StoryContainer';

class App extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={StoryContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
