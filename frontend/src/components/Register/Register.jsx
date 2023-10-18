import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import validationSchema from './validation.jsx'


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
const [errors, setErrors] = useState({})


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form", formData);
      createUser(formData);
      setSuccessMessage("Registration completed successfully!");
      setFormData(initialForm);
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/users/login");
      }, 4000);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div className={`flex items-center justify-center `}>
      <div className="h-fit w-1/3 bg-white p-3">
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
              required
            />

            <input
              value={formData.email}
              name="email"
              type="text"
              placeholder="Email"
              className="input-style"
              onChange={handleChange}
              required
            />
            <input
              value={formData.password}
              name="password"
              type="text"
              placeholder="Password"
              className="input-style"
              onChange={handleChange}
              required
            />

            {successMessage ? (
              <div className="text-green-600 cursor-pointer mb-4">
                {successMessage}
              </div>
            ) : (
              <div className="text-red-600 cursor-pointer mb-4">
                <Link to="/users/login">Click to Login</Link>
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
