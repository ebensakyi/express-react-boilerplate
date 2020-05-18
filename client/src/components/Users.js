import React, { Component } from "react";
import Axios from "axios";
import User from "./User";

export default class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("/api/users")
    .then((res)=>res.json())
    .then((users) => {
      this.setState({
        users: users,
      });

      console.log("users ",this.state.users)
    });

  }
  render() {
    return (
      <div>
        <User users={this.state.users} />
      </div>
    );
  }
}
