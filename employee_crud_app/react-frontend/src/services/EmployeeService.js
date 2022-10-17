import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployeeById(empId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + empId);
  }

  updateEmployee(empId, emp) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + empId, emp);
  }

  deleteEmployee(empId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + empId);
  }
}

export default new EmployeeService();
