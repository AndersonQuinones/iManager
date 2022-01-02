import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Employees from "./components/employees"
import SingleEmployee from "./components/singleEmployee"
import Navbar from "./components/navbar"

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<SingleEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

