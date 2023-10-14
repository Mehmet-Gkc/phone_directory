import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser, logoutUser, isLoggedIn, loggedInUser, loginError } =
    useContext(UserContext);

  const initialForm = { email: "", password: "" };
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
    } catch (error) {
      console.log(error);
    }
    setFormData(initialForm);
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 left-0 bottom-0">
      <div className="w-1/3 bg-white p-3">
        <h1 className="text-3xl uppercase text-indigo-700 font-bold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3 my-5">
            <input
              value={formData.email}
              name="email"
              type="text"
              placeholder="Email"
              className="input-style"
              onChange={handleChange}
            />
            <input
              value={formData.password}
              name="password"
              type="text"
              placeholder="Password"
              className="input-style"
              onChange={handleChange}
            />
              <div className="text-red-600 cursor-pointer mb-4">
              <Link to="/api/users/register">Click to Register</Link>
            </div>

            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
