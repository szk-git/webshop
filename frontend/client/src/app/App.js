import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Home from '../pages/home/Home';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';

import Login from '../pages/login/Login'

import { getCurrentUser } from '../utils/API/auth/authAPI'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }
  }

  loadCurrentlyLoggedInUser = (e) =>{
    this.setState({
      loading: true
    });
  }

  handleLogout = (e) =>{
    console.log("CLICK");
  }

  render(){
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <>
        <Header authenticated={false}  onLogout={this.handleLogout}/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </>
    );

  }
}

export default App;
