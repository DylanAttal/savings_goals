import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Pages/Landing'
import Savings from './Pages/Savings'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/savings" exact component={Savings} />
        </Switch>
      </Router>
    )
  }
}

export default App
