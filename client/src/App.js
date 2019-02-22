import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import auth from './auth'
import history from './history'

import './App.css'

import Landing from './Pages/Landing'
import Savings from './Pages/Savings'
import CreateGoal from './Pages/CreateGoal'

class App extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" render={() => auth.login()} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()
              return <></>
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {
                // Sets the axios authentication headers
                axios.defaults.headers.common = {
                  Authorization: auth.authorizationHeader()
                }
              })
              return <></>
            }}
          />
          <Route path="/" exact component={Landing} />
          <Route path="/savings" exact component={Savings} />
          <Route path="/create-goal" exact component={CreateGoal} />
        </Switch>
      </Router>
    )
  }
}

export default App
