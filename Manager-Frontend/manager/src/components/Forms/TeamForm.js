import React, { Component } from "react"

const blankForm = {
  name: "",
  imageUrl: "",
  description: "",
}

class Forms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: props.team
        ? (() => {
          return {
            name: props.team.name,
            imageUrl: props.team.imageUrl,
            description: props.team.description,
          }
        })()
        : blankForm,
    }
  }

  Inputs = () => {
    const inputData = [
      { id: 'name', title: "Name", type: "text", value: this.state.form.name },
      { id: 'imageUrl', title: "Image", type: "text", value: this.state.form.imageUrl },
      { id: 'description', title: "Description", type: "text", value: this.state.form.description },
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

  handleInputChange = (event) => {
    const form = { ...this.state.form }
    form[event.target.id] = event.target.value

    this.setState({ form })
  };

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
        <this.Button />
      </form>
    )
  }
}

export default Forms
