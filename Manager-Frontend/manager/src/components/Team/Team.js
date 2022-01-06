import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Form from "../Forms/TeamForm"
import Loaders from "../Loader/Loader"

const baseUrl = "http://127.0.0.1:3000/team"

class Employee extends Component {
  constructor(props) {
    super(props)

    const id = window.location.pathname.split("/")[2];

    this.state = {
      url: `http://127.0.0.1:8080/team/${id}`,
      team: undefined,
    }
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(response => {
        this.setState({ team: response.data })
      })
  }


  onDelete = () => {
    axios
      .delete(this.state.url)
      .then(response => { window.location.href = `${baseUrl}s` })
  };


  updateTeam = (team) => {

    axios
      .put(this.state.url, team)
      .then(response => {
        window.location.reload()
      })
      .catch(error => error.response.data)
  };

  render() {
    const team = this.state.team;

    return team ? (
      <div>
        <div>
          <Form
            name={"Update team: "}
            team={team}
            onSubmit={this.updateTeam}
          />
        </div>
        <div className="bg-dark text-center">
          <div className="d-flex justify-content-between">
            <h1>{team.name}</h1>
            <button type="button" className="btn btn-danger" onClick={this.onDelete}>X</button>
          </div>
          <img src={team.imageUrl} className="img-fluid rounded" />
          <h2>{team.description}</h2>
          <h3>Members of the Team: </h3>
          {
            team.teamMembers.map(member =>
              <div key={member.id}>
                <Link to={`/employees/${member.id}`}>
                  <h1>{member.name}</h1>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    ) : <Loaders />;
  }
}

export default Employee
