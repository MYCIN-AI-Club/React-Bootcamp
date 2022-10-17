import "./App.css";
import React from "react";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />}></Route>
              <Route
                path="/employees"
                element={<ListEmployeeComponent />}
              ></Route>
              <Route
                path="/add-employee"
                element={<CreateEmployeeComponent />}
              ></Route>
              <Route
                path="/update-employee/:id"
                element={<UpdateEmployeeComponent />}
              ></Route>
              <Route
                path="/view-employee/:id"
                element={<ViewEmployeeComponent />}
              ></Route>
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
