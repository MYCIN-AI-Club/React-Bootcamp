import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Error from "./pages/error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
