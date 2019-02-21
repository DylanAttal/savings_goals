import React, { Component } from 'react'
import axios from 'axios'

import './style.css'

import Goal from '../../Components/Goal'

export default class Savings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: []
    }
  }

  componentDidMount = () => {
    this.loadGoals()
  }

  loadGoals = () => {
    axios.get('/goals').then(response => {
      this.setState({
        goals: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <header className="savings-header">
          <p>My Savings Goals</p>
          <button className="logout">Log Out</button>
        </header>
        <section className="goals">
          {this.state.goals.map((goal, index) => {
            return (
              <Goal
                key={index}
                goalName={goal.name}
                targetAmount={goal.target}
                savedAmount={goal.saved}
              />
            )
          })}
        </section>
        <footer className="savings-footer">
          Thanks for saving at Acme Bank
        </footer>
      </div>
    )
  }
}
