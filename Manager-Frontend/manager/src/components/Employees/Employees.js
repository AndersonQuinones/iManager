import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Form from "../Forms/EmployeeForm";

const baseURL = "http://127.0.0.1:8080/employee";

class Employees extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
    }
  }

  componentDidMount() {
    axios.get(baseURL).then(res => {
      this.setState({ employees: res.data })
    })
  }

  createEmployee = (employee) => {
    console.log(employee)
    axios
      .post(baseURL, employee)
      .then((response) => {
        window.location.reload()
      })
      .catch(error => console.error(error.response.data))
  };

  render() {
    const employees = this.state.employees
    return (
      <div className="container">
        <div>
          <Form
            name={"Hire Employee: "}
            onSubmit={this.createEmployee} />
        </div>
        <h1 className="text-center">Employees:</h1>
        <div className="row">
          {
            employees.map(employee =>
              <div key={employee.id} className="col-6 m-5 bg-dark">
                <Link to={`/employees/${employee.id}`}>
                  <h2>{employee.name}</h2>
                  <img src={employee.imageUrl} className="img-fluid rounded h-75 w-100" />
                  <h2>{employee.jobTitle}</h2>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Employees
