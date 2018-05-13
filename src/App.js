import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoryContainer from './containers/StoryContainer';
import About from './components/About';
import Feedback from './components/Feedback';

class App extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={StoryContainer} />
            <Route path="/about" component={About} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
