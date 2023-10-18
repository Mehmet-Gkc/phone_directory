import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem("loggedInUser");

    if (storedLoggedInUser) {
      setLoggedInUser(JSON.parse(storedLoggedInUser));
    }
  }, []);

  const createUser = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:4004/api/users/register`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("res", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:4004/api/users/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        setIsLoggedIn(true);
        setLoggedInUser(userData);
      }
    } catch (error) {
      console.log(error);
      setLoginError(response.data.msg);
    }
  };

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4004/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setIsLoggedIn(false);
      localStorage.removeItem("loggedInUser");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginUser,
        isLoggedIn,
        setIsLoggedIn,
        logoutUser,
        loggedInUser,
        loginError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
