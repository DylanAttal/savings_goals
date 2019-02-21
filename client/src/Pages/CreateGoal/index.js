import React, { Component } from 'react'
import './style.css'

export default class CreateGoal extends Component {
  render() {
    return (
      <div>
        <header className="savings-header">
          <p>New Goal</p>
          <button className="logout">Log Out</button>
        </header>
        <div className="create-new-goal">
          <h1>Create a new savings goal</h1>
          <form>
            <div className="goal">
              <div className="goal-header">
                <div className="name">
                  <h3 className="new-name">
                    <input
                      className="new-goal-name"
                      type="text"
                      placeholder="New Goal Name"
                    />
                  </h3>
                </div>
              </div>
              <div className="savings">
                <div className="new-target">
                  <p>
                    <input type="number" placeholder="0" />
                  </p>
                  <p className="target-amount">Target Amount</p>
                </div>
                <div className="new-saved">
                  <p>
                    <input type="number" placeholder="0" />
                  </p>
                  <p className="saved-amount">Saved Amount</p>
                </div>
              </div>
              <div className="submit-info">
                <button className="submit-goal">Create New Goal</button>
              </div>
            </div>
          </form>
        </div>
        <footer className="savings-footer">
          Thanks for saving at Acme Bank
        </footer>
      </div>
    )
  }
}
