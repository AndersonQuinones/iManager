import React, { Component } from "react";
import { Link } from "react-router-dom"
import Audio from "../Audios/Audio"

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/employees">iManager</a>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/employees" className="nav-link">Employees</Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-link">Team</Link>
            </li>
            <li className="nav-item">
              <Audio />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
