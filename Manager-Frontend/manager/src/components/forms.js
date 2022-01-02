import React, { Component } from "react"

class Forms extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleUpdate}>
        <div className="d-flex justify-content-center">
          <h1>{this.props.name}</h1>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label or="inputName4">
              Name:
          </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>
              Image:
          </label>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>
              Job Title:
          </label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>
              Email:
          </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>
              Phone:
          </label>
            <input
              type="text"
              className="form-control"
              name="Phone"
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label>
              Level:
          </label>
            <select id="inputState" className="form-control">
              <option select>Choose...</option>
              <option>Manager</option>
              <option>Individual Contributer</option>
              <option>Director</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default Forms
