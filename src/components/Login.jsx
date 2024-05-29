import React from "react";
import "animate.css";

import { useState, useEffect, useRef } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

const Login = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    login,
    error: authError,
    loading,
    loginGoogle,
    loginGithub,
  } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div id="cont" className="cont animate__animated animate__zoomInDown">
      <form onSubmit={handleSubmit}>
        <h1>Code_net</h1>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            id="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        {!loading && (
          <button type="submit" className="button-27">
            Log in
          </button>
        )}
        {loading && (
          <button className="btn" disabled>
            wait...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>

      <div className="btn_google_git">
        <div className="or">
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="google_git">
          <button className="button-85" onClick={loginGoogle}>
            <ion-icon name="logo-google"></ion-icon>
            Google
          </button>
          <button className="button-85" onClick={loginGithub}>
            <ion-icon name="logo-github"></ion-icon>
            GitHub
          </button>
        </div>
      </div>

      <a onClick={register}>Register</a>
    </div>
  );
};

export default Login;
