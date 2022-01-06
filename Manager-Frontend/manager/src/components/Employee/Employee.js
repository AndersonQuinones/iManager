import React, { Component } from "react"
import axios from "axios"
import Form from "../Forms/EmployeeForm"
import Loaders from "../Loader/Loader"

const baseUrl = "http://127.0.0.1:3000/employee"

class Employee extends Component {
  constructor(props) {
    super(props)

    const id = window.location.pathname.split("/")[2];

    this.state = {
      url: `http://127.0.0.1:8080/employee/${id}`,
      employee: undefined,
    }
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(response => {
        this.setState({ employee: response.data })
      })
  }


  onDelete = () => {
    axios
      .delete(this.state.url)
      .then(response => { window.location.href = `${baseUrl}s` })
  };

  updateEmployee = (employee) => {

    axios
      .put(this.state.url, employee)
      .then(response => {
        window.location.reload()
      })
      .catch(error => error.response.data)
  };

  render() {
    const employee = this.state.employee;

    return employee ? (
      <div>
        <div>
          <Form
            name={"Update Employee: "}
            employee={employee}
            onSubmit={this.updateEmployee}
          />
        </div>
        <div className="bg-dark text-center">
          <div className="d-flex justify-content-between">
            <h1>{employee.name}</h1>
            <button type="button" className="btn btn-danger" onClick={this.onDelete}>X</button>
          </div>
          <img src={employee.imageUrl} className="img-fluid rounded" />
          <h2>{employee.jobTitle}</h2>
          <h3>{employee.email}</h3>
          <h2>{employee.phone}</h2>
          <h3>{employee.level}</h3>
        </div>
      </div>
    ) : <Loaders />;
  }
}

export default Employee
