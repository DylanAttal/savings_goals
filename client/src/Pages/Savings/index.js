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
          <Goal
            goalName="Car Down Payment"
            targetAmount={4000}
            savedAmount={3000}
          />
          <Goal
            goalName="House Down Payment"
            targetAmount={25000}
            savedAmount={10000}
          />
          <Goal
            goalName="Bahamas Vacation"
            targetAmount={3000}
            savedAmount={500}
          />
          <Goal goalName="Roadtrip" targetAmount={1000} savedAmount={200} />
          <Goal
            goalName="Christmas Gifts"
            targetAmount={500}
            savedAmount={450}
          />
        </section>
        <footer className="savings-footer">
          Thanks for saving at Acme Bank
        </footer>
      </div>
    )
  }
}
