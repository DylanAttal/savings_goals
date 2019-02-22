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
      savedAmount: this.props.savedAmount,
      isChanging: false,
      isAdding: false
    }
  }

  _deleteGoal = (id, event) => {
    axios.delete(`/goals/${id}`).then(response => {
      this.props.loadGoals()
    })
  }

  _changeTarget = event => {
    this.setState({
      isChanging: true
    })
  }

  _addSavings = event => {
    this.setState({
      isAdding: true
    })
  }

  _submitNewTarget = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.put(`/goals/${this.state.id}`, formData).then(response => {
      this.setState({
        targetAmount: response.data.target
      })
    })

    this.setState({
      isChanging: false
    })
  }

  _submitNewSavings = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.put(`/goals/${this.state.id}`, formData).then(response => {
      this.setState({
        savedAmount: response.data.saved
      })
    })

    this.setState({
      isAdding: false
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
            <p className={this.state.isChanging ? 'hidden' : ''}>
              ${this.state.targetAmount} Target
            </p>
            <form onSubmit={this._submitNewTarget}>
              <input
                name="goal[target]"
                type="number"
                className={this.state.isChanging ? 'changing-target' : 'hidden'}
              />
              <input name="goal[id]" value={this.state.id} type="hidden" />
              <input name="goal[user_id]" value={1} type="hidden" />
            </form>
            <button className="change-target" onClick={this._changeTarget}>
              Change Target
            </button>
          </div>
          <div className="saved">
            <p className={this.state.isAdding ? 'hidden' : ''}>
              ${this.state.savedAmount} Saved
            </p>
            <form onSubmit={this._submitNewSavings}>
              <input
                name="goal[saved]"
                type="number"
                className={this.state.isAdding ? 'adding-savings' : 'hidden'}
              />
              <input name="goal[id]" value={this.state.id} type="hidden" />
              <input name="goal[user_id]" value={1} type="hidden" />
            </form>
            <button className="add-savings" onClick={this._addSavings}>
              Add Savings
            </button>
          </div>
        </div>
      </div>
    )
  }
}
