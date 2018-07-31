import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import ShowStoryContainer from './containers/ShowStoryContainer';
import IndexContainer from './containers/IndexContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="homepageContainer">
          <Navbar />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path='/stories' component={IndexContainer} />
              <Route exact path='/stories/:id' component={ShowStoryContainer} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
