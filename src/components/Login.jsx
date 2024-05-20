import React from "react";
import "animate.css";

const Login = ({ register }) => {
  return (
    <div className="cont animate__animated animate__zoomInDown">
      <form action="">
        <h1>Code_net</h1>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required />
          <label for="">Email</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
          <label for="">Password</label>
        </div>

        <button>Log in</button>
      </form>

      <div className="btn_google_git">
        <div className="or">
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="google_git">
          <button>
            <ion-icon name="logo-google"></ion-icon>
            Google
          </button>
          <button>
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
