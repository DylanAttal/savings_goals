import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Landing from './Pages/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Landing} />
      </Router>
    )
  }
}

export default App
