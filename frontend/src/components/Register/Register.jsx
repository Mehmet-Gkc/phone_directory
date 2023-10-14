import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(UserContext);
  const [formData, setFormData] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form", formData);
      createUser(formData);
      setSuccessMessage("Registration completed successfully!");
      setFormData(initialForm);
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/api/users/login");
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 left-0 bottom-0">
      <div className="w-1/3 bg-white p-3">
        <h1 className="text-3xl uppercase text-indigo-700 font-bold">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3 my-5">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              className="input-style"
            />

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

            {successMessage ? (
              <div className="text-green-600 cursor-pointer mb-4">
                {successMessage}
              </div>
            ) : (
              <div className="text-red-600 cursor-pointer mb-4">
                <Link to="/api/users/login">Click to Login</Link>
              </div>
            )}

            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
