import React, { Component } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };

    // binding all methods to the class
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };

    // simply log the employee info to the console for now
    console.log(JSON.stringify(employee));
    // save data to the db using the axios service
    EmployeeService.createEmployee(employee).then((res) => {
      return <Navigate to="/employees" />;
    });
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center my-3">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div className="form-group my-4">
                    <label>First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      autoComplete="off"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group my-5">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      autoComplete="off"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group my-5">
                    <label>Email Address:</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="emailId"
                      className="form-control"
                      autoComplete="off"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={this.saveEmployee}
                    className="btn btn-success"
                  >
                    Save
                  </button>
                  <Link to="/" className="btn btn-danger mx-3">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
