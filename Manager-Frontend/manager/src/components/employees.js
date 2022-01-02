import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./employees.css"
import Forms from "./forms";
const url = "http://127.0.0.1:8080";

class Employee extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
    }
  }

  componentDidMount() {
    axios.get(`${url}/employee`).then(res => {
      this.setState({ employees: res.data })
    })
  }

  handleCreate = (event) => {
    event.preventDefault()
    const name = event.target.name.value || this.state.singleEmployee.name;
    const jobTitle = event.target.jobTitle.value || this.state.singleEmployee.jobTitle;
    const imageUrl = event.target.image.value || this.state.singleEmployee.imageUrl;
    const email = event.target.email.value || this.state.singleEmployee.email;
    const phone = event.target.phone.value || this.state.singleEmployee.phone;
    const level = event.target.level.value || this.state.singleEmployee.level;

    axios
      .post(`${url}/employee/${window.location.pathname.split("/")[2]}`, {
        name,
        imageUrl,
        jobTitle,
        email,
        phone,
        level,
      })
      .then((res) => {
        this.setState({ singleEmployee: res.data });
      });
  };

  render() {
    const employees = this.state.employees
    return (
      <div className="container">
        <h1 className="text-center">Employees:</h1>
        <div className="row">
          {
            employees.map(employee =>
              <div key={employee.id} className="col-6 d-flex justify-content-around bg-dark">
                <Link to={`/employees/${employee.id}`}>
                  <h2>{employee.name}</h2>
                  <img src={employee.imageUrl} className="img-fluid rounded h-75 w-100" />
                  <h2>{employee.jobTitle}</h2>
                </Link>
              </div>
            )
          }
        </div>
        <Forms />
      </div>
    )
  }
}

export default Employee
