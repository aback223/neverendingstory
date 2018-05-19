import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoryContainer from './containers/StoryContainer';
import About from './components/About';
import Feedback from './components/Feedback';
import IndexContainer from './containers/IndexContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="homepageContainer">
          <Navbar />
            <Switch>
              <Route exact path="/" component={IndexContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/feedback" component={Feedback} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
