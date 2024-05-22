import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="11031071682-5l0j0vkdb5g5n9praiidh9arnr5968k4.apps.googleusercontent.com"> */}
    <App />
    {/* </GoogleOAuthProvider> */};
  </React.StrictMode>
);
