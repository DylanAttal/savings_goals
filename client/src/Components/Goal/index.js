import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

export default class Goal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.id,
      goalName: this.props.goalName,
      targetAmount: this.props.targetAmount,
      savedAmount: this.props.savedAmount
    }
  }

  _deleteGoal = (id, event) => {
    axios.delete(`/goals/${id}`).then(response => {
      this.props.loadGoals()
    })
  }

  render() {
    return (
      <div className="goal">
        <div className="goal-header">
          <div className="delete-goal">
            <p
              onClick={this._deleteGoal.bind(this, this.state.id)}
              className="x"
            >
              x
            </p>
          </div>
          <div className="name">
            <h3>{this.state.goalName}</h3>
          </div>
        </div>
        <div className="savings">
          <div className="target">
            <p>${this.state.targetAmount} Target</p>
            <button className="change-target">Change Target</button>
          </div>
          <div className="saved">
            <p>${this.state.savedAmount} Saved</p>
            <button className="add-savings">Add Savings</button>
          </div>
        </div>
      </div>
    )
  }
}
