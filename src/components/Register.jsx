import React from "react";
import "animate.css";

const Register = ({ register }) => {
  return (
    <div className="cont animate__animated animate__zoomInUp">
      <form>
        <h1>Code_net</h1>

        <div className="inputbox">
          <ion-icon name="accessibility-outline"></ion-icon>
          <input type="text" required />
          <label for="">Username</label>
        </div>

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

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="confirm_password" required />
          <label for="">Confirm Password</label>
        </div>

        <button>Register</button>
      </form>

      {/* <div className="btn_google_git">
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
      </div> */}
      <a onClick={register}>To go back</a>
    </div>
  );
};

export default Register;
