import React, { Component } from 'react';
import SigninForm from './pages/signinform';
import SignupForm from './pages/signupform'
import BoardPage from './pages/boardpage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LocalStorage, {saveState } from './localStorage'
import HomePage from './pages/homepage'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      signined: false
    }
  }
  Signin=()=>{
    this.setState({signined: true})
    saveState(this.state)
  }
  render() {
    return (
      <div>
        <Router>
        <div>
        {console.log(this.state.signined)}
          <Route exact path="/" render={()=><HomePage signined={this.state.signined}/>}/>
          <Route exact path="/signinform" render={()=><SigninForm Signin={this.Signin}/>} />
          <Route exact path="/signupform" render={()=><SignupForm Signin={this.Signin}/>} />
          <Route exact path="/myboard" component={BoardPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
