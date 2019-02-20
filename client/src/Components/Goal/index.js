import React, { Component } from 'react'

export default class Goal extends Component {
  render() {
    return (
      <div className="goal">
        <div className="goal-name">
          <h3>Car Down Payment</h3>
        </div>
        <div className="savings">
          <div className="target">$ 75 target</div>
          <div className="saved">$ 40 saved</div>
        </div>
        <div className="add-money">
          <button>Add Money</button>
        </div>
      </div>
    )
  }
}
