import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    axios.get('/users/current').then(response => {
      this.setState({
        goals: response.data.goals
      })
    })
  }

  render() {
    return (
      <div>
        <header className="savings-header">
          <p>My Goals</p>
          <div className="buttons">
            <Link to="/create-goal">
              <button className="add-goal">New Goal</button>
            </Link>
            <Link to="/logout">
              <button className="logout">Log Out</button>
            </Link>
          </div>
        </header>
        <section className="goals">
          {this.state.goals.map((goal, index) => {
            return (
              <Goal
                key={index}
                id={goal.id}
                goalName={goal.name}
                targetAmount={goal.target}
                savedAmount={goal.saved}
                loadGoals={this.loadGoals}
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
