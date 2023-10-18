import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import Contacts from "./components/Contacts/Contact";
import PageLayout from "./components/PageLayout/Layout/PageLayout";

function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <div className="layout-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/register" element={<Register />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/phones" element={<Contacts />} />
            </Routes>
          </div>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
