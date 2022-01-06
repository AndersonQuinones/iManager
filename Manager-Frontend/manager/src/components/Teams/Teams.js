import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Form from "../Forms/TeamForm";

const baseURL = "http://127.0.0.1:8080/team";

class Teams extends Component {
  constructor() {
    super()
    this.state = {
      teams: [],
    }
  }

  componentDidMount() {
    axios.get(baseURL).then(res => {
      this.setState({ teams: res.data })
    })
  }

  createTeam = (team) => {
    axios
      .post(baseURL, team)
      .then((response) => {
        window.location.reload()
      });
  };

  render() {
    const teams = this.state.teams
    return (
      <div className="container">
        <div>
          <Form
            name={"Create team: "}
            onSubmit={this.createTeam} />
        </div>
        <h1 className="text-center">Teams:</h1>
        <div className="row">
          {
            teams.map(team =>
              <div key={team.id} className="col-6 m-5 bg-dark">
                <Link to={`/teams/${team.id}`}>
                  <h2>{team.name}</h2>
                  <img src={team.imageUrl} className="img-fluid rounded h-75 w-100" />
                </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Teams
