import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployeeComponent = (props) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(event);
    setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    let emp = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
    };

    // save data to the db using the axios service
    EmployeeService.createEmployee(emp)
      .then((res) => {
        navigate("/employees");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
                    type="email"
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    autoComplete="off"
                    value={employee.firstName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group my-5">
                  <label>Last Name:</label>
                  <input
                    type="email"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    autoComplete="off"
                    value={employee.lastName}
                    onChange={changeHandler}
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
                    value={employee.emailId}
                    onChange={changeHandler}
                  />
                </div>

                <button
                  type="submit"
                  onClick={saveEmployee}
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
};

export default CreateEmployeeComponent;
