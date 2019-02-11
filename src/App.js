import React, { Component } from 'react';
import SigninForm from './pages/signinform';
import SignupForm from './pages/signupform'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signinform" component={SigninForm} />
          <Route exact path="/signupform" component={SignupForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
