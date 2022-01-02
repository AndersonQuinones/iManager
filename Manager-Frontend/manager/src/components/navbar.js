import React, { Component } from "react";
import { Link } from "react-router-dom"
import Audio from "./audio"

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
              <Link to="/team" className="nav-link">Team</Link>
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

// <ul>
//   <li>
//     <Link to="/employees">Employees</Link>
//   </li>
//   <li>
//     <Link to="/team">Team</Link>
//   </li>
// </ul>
export default Navbar
