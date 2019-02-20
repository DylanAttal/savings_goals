import React, { Component } from 'react'
import './style.css'

export default class Goal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goalName: this.props.goalName,
      targetAmount: this.props.targetAmount,
      savedAmount: this.props.savedAmount
    }
  }
  render() {
    return (
      <div className="goal">
        <div className="goal-header">
          <div className="delete-goal">
            <p className="x">x</p>
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
