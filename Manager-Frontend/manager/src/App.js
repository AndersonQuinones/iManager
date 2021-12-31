import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Employees from "./components/employees"

class App extends Component {
  render() {
    return (
      <div>
        <Employees />
      </div>
    );
  }
}

export default App;
