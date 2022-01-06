import React, { Component } from "react"
import axios from "axios"

const baseURL = "http://127.0.0.1:8080/team";

const blankForm = {
  name: "",
  imageUrl: "",
  jobTitle: "",
  email: "",
  phone: "",
  level: "",
  teamId: ""
}

class Forms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        teamId: [],
        level: []
      },
      form: props.employee
        ? (() => {
          return {
            name: props.employee.name,
            imageUrl: props.employee.imageUrl,
            jobTitle: props.employee.jobTitle,
            email: props.employee.email,
            phone: props.employee.phone,
            level: props.employee.level,
            teamId: props.employee.teamId,
          }
        })()
        : blankForm,
    }
  }

  componentDidMount() {
    axios
      .get(baseURL)
      .then(response => {
        const teamOptions = response.data.map(team => {
          return {
            id: team.id,
            value: team.name,
          }
        })

        const newState = {
          form: {
            ...this.state.form,
            teamId: teamOptions[0].id
          },
          options: {
            ...this.state.options,
            teamId: teamOptions,
          }
        }

        this.setState(newState)
      })

    axios
      .get("http://127.0.0.1:8080/employee/levels")
      .then(response => {
        const levelOptions = response.data.map(level => {
          return {
            id: level.id,
            value: level.value,
          }
        })

        const newState = {
          form: {
            ...this.state.form,
            level: levelOptions[0].id
          },
          options: {
            ...this.state.options,
            level: levelOptions,
          }
        }

        this.setState(newState)
      })
  }

  Inputs = () => {
    const inputData = [
      { id: 'name', title: "Name", type: "text", value: this.state.form.name },
      { id: 'imageUrl', title: "Image", type: "text", value: this.state.form.imageUrl },
      { id: 'jobTitle', title: "Job Title", type: "text", value: this.state.form.jobTitle },
      { id: 'email', title: "Email", type: "text", value: this.state.form.email },
      { id: 'phone', title: "Phone", type: "text", value: this.state.form.phone }
    ]

    return inputData.map((input, index) => {
      return (
        <div className="form-row " key={input.id}>
          <div className="form-group col-md-6">
            <label>{input.title}</label>
            <input
              id={input.id}
              className="form-control"
              aria-describedby={input.title}
              type={input.type}
              value={input.value}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      )
    })
  }

  LevelSelector = () => {
    return (
      <div className="form-group">
        <label>Level</label>
        <select id="level" className="form-control" onChange={this.handleSelectChange}>
          {this.state.options.level.map(option => <option key={option.id}>{option.value}</option>)}
        </select>
      </div>
    )
  }

  TeamSelector = () => {
    return (
      <div className="form-group">
        <label>Team</label>
        <select id="teamId" className="form-control" onChange={this.handleSelectChange}>
          {this.state.options.teamId.map(option => <option key={option.id}>{option.value}</option>)}
        </select>
      </div>
    )
  }

  handleInputChange = (event) => {
    const form = { ...this.state.form }
    form[event.target.id] = event.target.value
    this.setState({ form })
  };

  handleSelectChange = (event) => {
    const options = this.state.options[event.target.id]
    const index = options.findIndex(option => option.value === event.target.value)
    const value = options[index].id

    const form = { ...this.state.form }
    form[event.target.id] = value
    this.setState({ form })
  }

  Button = () => {
    return <button type="submit" className="btn btn-primary">Submit</button>
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="p-5">
        <h1>{this.props.name}</h1>
        <this.Inputs />
        <this.LevelSelector />
        <this.TeamSelector />
        <this.Button />
      </form>
    )
  }
}

export default Forms
