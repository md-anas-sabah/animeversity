import React from "react";
import "../styles/SignUp.css";

function SignUp() {
  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <p>Sign Up with your email and password</p>
      <form>
        <label>Display Name</label>
        <input type="text" className="inputText" required autoComplete="on" />
        <label>Email</label>
        <input type="text" className="inputText" required autoComplete="on" />
        <label>Password</label>
        <input type="password" className="inputText" required />
        <label>Confirm Password</label>
        <input type="password" className="inputText" required />
        <div className="form-button">
          <button className="signIn-button">sign in</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
