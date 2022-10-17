import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link, useNavigate } from "react-router-dom";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    const { navigate } = props;
    this.navigate = navigate;
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({
        employees: res.data,
      });
    });
  }

  editEmployee(id) {
    this.navigate(`/update-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      // this.componentDidMount();
      this.setState({
        employees: this.state.employees.filter((emp) => emp.id !== id),
      });
    });
  }

  viewEmployee(id) {
    this.navigate(`/view-employee/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center page-heading">Employees List</h2>
        <Link to="/add-employee" className="btn btn-primary add-emp-btn">
          Add Employee
        </Link>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.emailId}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editEmployee(emp.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => this.deleteEmployee(emp.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => this.viewEmployee(emp.id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// export default ListEmployeeComponent;
// Wrap and export
export default function (props) {
  const navigate = useNavigate();

  return <ListEmployeeComponent {...props} navigate={navigate} />;
}
