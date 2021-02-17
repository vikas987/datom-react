import React from "react";
import { getUsers } from "../apis/searchApi";
import "./userSearch.css";

export class UserSeearch extends React.Component {
  state = {
    allUsers: [],
    users: [],
    inputValue: "",
  };

  componentDidMount() {
    getUsers().then((data) => {
      this.setState({ allUsers: data.data });
    });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  onSubmit = () => {
    const users = this.state.allUsers.filter((ele) => {
      return (
        ele.first_name
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        ele.last_name
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase())
      );
    });

    this.setState({ users: users, inputValue: "" });
  };

  render() {
    const body = this.state.users.map((ele, i) => {
      return (
        <tr key={i}>
          <td>{ele.first_name}</td>
          <td>{ele.last_name}</td>
          <td>{ele.email}</td>
          {/* <td>{ele.id}</td> */}
          <td>
            <img src={ele.avatar}></img>
          </td>
        </tr>
      );
    });
    return (
      <>
        <input
          class="input-text"
          type="text"
          placeholder="enter first/last name"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.onSubmit} class="btn btn-primary">
          Submit
        </button>
        <div>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Emai</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>{body}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default UserSeearch;
