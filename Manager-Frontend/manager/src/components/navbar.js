import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <nav>
        <Link to="/employees">
          Employees
        </Link>
        <Link to="/teams ">
          Teams
        </Link>
      </nav>
    )
  }
}

export default Navbar
