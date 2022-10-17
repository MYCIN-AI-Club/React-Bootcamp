import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function ViewEmployeeComponent() {
  const id = useParams().id;
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setEmployee({ ...res.data });
      })
      .catch((error) => {
        alert("Unable to get data from server: " + error);
      });
  }, []);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3 m-auto">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label className="col">First Name: </label>
            <span className="col">{employee.firstName}</span>
          </div>
          <div className="row">
            <label className="col">Last Name: </label>
            <span className="col">{employee.lastName}</span>
          </div>
          <div className="row">
            <label className="col">Email Id: </label>
            <span className="col">{employee.emailId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;
