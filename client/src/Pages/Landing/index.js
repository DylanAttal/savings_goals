import React, { Component } from 'react'
import './style.css'

import acmeLogo from '../../images/acme-bank-logo.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header className="landing-header">
          <div className="landing-header-left">
            <img src={acmeLogo} className="logo" alt="Logo of Bank OZK." />
          </div>
          <div className="landing-header-right">
            <button className="login">Login</button>
          </div>
        </header>
        <section className="action">
          <div className="action-container">
            <div className="taglines">
              <p className="tagline">Building Communities</p>
              <p className="sub-tagline">One deposit at a time</p>
            </div>
            <div className="call-to-action">
              <p className="start-saving">Start Saving Now</p>
              <button className="signup">Sign Up</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
