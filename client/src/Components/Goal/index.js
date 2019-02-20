import React, { Component } from 'react'
import './style.css'

export default class Goal extends Component {
  render() {
    return (
      <div className="goal">
        <div className="goal-header">
          <div className="delete-goal">
            <p className="x">x</p>
          </div>
          <div className="name">
            <h3>Car Down Payment</h3>
          </div>
        </div>
        <div className="savings">
          <div className="target">
            <p>$4,000 Target</p>
            <button className="change-target">Change Target</button>
          </div>
          <div className="saved">
            <p>$750 Saved</p>
            <button className="add-savings">Add Savings</button>
          </div>
        </div>
      </div>
    )
  }
}
