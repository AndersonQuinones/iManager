import React, { Component } from "react"
import axios from "axios"
import Forms from "./forms"
const url = "http://127.0.0.1:8080";

class SingleEmployee extends Component {
  constructor() {
    super()
    this.state = {
      singleEmployees: {},
    }
    this.onDelete = this.onDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get(`${url}/employee/${window.location.pathname.split("/")[2]}`)
      .then(res => {
        this.setState({ singleEmployees: res.data })
      })
  }

  /**
   * Enables the admin to remove the singleEmployee from the
   * selected category.
   */

  onDelete = () => {
    axios
      .delete(`${url}/employee/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        this.setState({ singleEmployee: res.data });
      });
  };

  /**
   * Enables the admin to update the singleEmployee from the
   * selected category.
   */
  handleUpdate = (event) => {
    event.preventDefault()
    const name = event.target.name.value || this.state.singleEmployee.name;
    const jobTitle = event.target.jobTitle.value || this.state.singleEmployee.jobTitle;
    const imageUrl = event.target.image.value || this.state.singleEmployee.imageUrl;
    const email = event.target.email.value || this.state.singleEmployee.email;
    const phone = event.target.phone.value || this.state.singleEmployee.phone;
    const level = event.target.level.value || this.state.singleEmployee.level;

    axios
      .put(`${url}/employee/${window.location.pathname.split("/")[2]}`, {
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



  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  render() {
    const employee = this.state.singleEmployees;
    return (
      <div>
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
        <div>
          <Forms
            name={"Update Employee: "}
            submission={this.handleUpdate}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default SingleEmployee
