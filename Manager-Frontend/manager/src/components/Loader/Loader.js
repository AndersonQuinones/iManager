import React, { Component } from "react"
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom"

class Loaders extends Component {
  //other logic
  render() {
    return (
      <div>
        <Loader type="ThreeDots" color="#000000" height={80} width={80} timeout={3000} className="d-flex justify-content-center" />
      </div>

    );
  }
}

export default Loaders
