import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PhoneProvider from "./context/PhoneContext.jsx";
import UserProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PhoneProvider>
        <App />
      </PhoneProvider>
    </UserProvider>
  </React.StrictMode>
);
