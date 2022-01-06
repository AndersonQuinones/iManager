import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Employees from "./components/Employees/Employees"
import Employee from "./components/Employee/Employee"
import Navbar from "./components/Navbar/Navbar"
import Teams from "./components/Teams/Teams"
import Team from "./components/Team/Team"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<Employee />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

