import "animate.css";
import React from "react";

import { useState, useEffect } from "react";
import { useAuthentication } from "../hooks/useAuthentication";

const Register = ({ register }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);
    // console.log(res);

    // location.href = "/";
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="cont animate__animated animate__zoomInUp">
      <form onSubmit={handleSubmit}>
        <h1>Code_net</h1>

        <div className="inputbox">
          <ion-icon name="person-outline"></ion-icon>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <label>Username</label>
        </div>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
        </div>

        {!loading && <button>Register</button>}
        {loading && <button disabled>Aguarde...</button>}
      </form>
      {error && <p className="error">{error}</p>}
      <a onClick={register}>To go back</a>
    </div>
  );
};

export default Register;
