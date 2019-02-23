import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import history from '../../../src/history'

import './style.css'

export default class CreateGoal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: []
    }
  }

  _submit = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.post('/goals', formData).then(response => {
      this.setState(
        {
          goals: response.data
        },
        history.push('/savings')
      )
    })
  }

  render() {
    return (
      <div>
        <header className="savings-header">
          <p>New Goal</p>
          <Link to="/logout">
            <button className="logout">Log Out</button>
          </Link>
        </header>
        <div className="create-new-goal">
          <h1>Create a new savings goal</h1>
          <form onSubmit={this._submit}>
            <div className="goal">
              <div className="goal-header">
                <div className="name">
                  <h3 className="new-name">
                    <input
                      name="goal[name]"
                      className="new-goal-name"
                      type="text"
                      placeholder="New Goal Name"
                      autoComplete="off"
                    />
                  </h3>
                </div>
              </div>
              <div className="savings">
                <div className="new-target">
                  <p>
                    <input
                      name="goal[target]"
                      type="number"
                      placeholder="0"
                      autoComplete="off"
                    />
                  </p>
                  <p className="target-amount">Target Amount</p>
                </div>
                <div className="new-saved">
                  <p>
                    <input
                      name="goal[saved]"
                      type="number"
                      placeholder="0"
                      autoComplete="off"
                    />
                  </p>
                  <p className="saved-amount">Saved Amount</p>
                  {/* <input name="goal[user_id]" value={1} type="hidden" /> */}
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
