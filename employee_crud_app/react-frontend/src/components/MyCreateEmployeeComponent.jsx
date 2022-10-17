import React, { Component } from "react";
import "./MyCreateEmployeeComponent.css";

class MyCreateEmployeeComponent extends Component {
  addEmployee() {
    console.log("employee add button pressed");
  }

  render() {
    return (
      <div className="createEmpContainer">
        {/* the heading */}
        <div className="heading">Add Employee</div>
        <div className="formBody">
          <form action="addEmployee" method="post">
            <div className="fieldHeading">First Name</div>
            <input type="text" name="firstName" id="fName" className="field" />
            <div className="fieldHeading">Last Name</div>
            <input type="text" name="lastName" id="lName" className="field" />
            <div className="fieldHeading">Email ID</div>
            <input type="emailId" name="email" id="email" className="field" />
            <br />
            <div style={{ textAlign: "right" }}>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary submitBtn"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MyCreateEmployeeComponent;
