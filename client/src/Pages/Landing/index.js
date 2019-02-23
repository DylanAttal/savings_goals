import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import acmeLogo from '../../images/acme-bank-logo-light-grey.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <header className="landing-header">
          <div className="landing-header-left">
            <img src={acmeLogo} className="logo" alt="Logo of Bank OZK." />
          </div>
          <div className="landing-header-right">
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </div>
        </header>
        <section className="action">
          <div className="action-container">
            <div className="taglines">
              <p className="tagline">Build Your Future</p>
              <p className="sub-tagline">One deposit at a time</p>
            </div>
            <div className="call-to-action">
              <p className="start-saving">Start Saving Now</p>
              <Link to="/login">
                <button className="signup">Sign Up</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
