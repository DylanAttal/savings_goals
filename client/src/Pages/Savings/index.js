import React, { Component } from 'react'

import './style.css'

import Goal from '../../Components/Goal'

export default class Savings extends Component {
  render() {
    return (
      <div>
        <header className="savings-header">
          <p>My Savings Goals</p>
          <button className="logout">Log Out</button>
        </header>
        <section className="goals">
          <Goal />
          <Goal />
          <Goal />
          <Goal />
          <Goal />
        </section>
        <footer className="savings-footer">
          Thanks for saving at Acme Bank
        </footer>
      </div>
    )
  }
}
