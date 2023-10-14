import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/users/register" element={<Register />} />
          <Route path="/api/users/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
