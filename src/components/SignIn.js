import React from "react";
import "../styles/SignIn.css";

function SignIn() {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign In with your email and password</p>
      <form>
        <label>Email</label>
        <input type="text" className="inputText" required autoComplete="on" />
        <label>Password</label>
        <input type="password" className="inputText" required />
        <div className="form-button">
          <button className="signIn-button">sign in</button>
          <button className="google-button">sign in with google</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
