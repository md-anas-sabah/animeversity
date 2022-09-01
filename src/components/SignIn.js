import React, { useState } from "react";
import "../styles/SignIn.css";
import { auth, signInWithGoogle } from "../firebase/firebaseUtils";
// import { UserAuth } from "../context/AuthContext";

function SignIn() {
  //   const { googleSignIn } = UserAuth();

  //   const handleSignIn = async () => {
  //     try {
  //       await googleSignIn();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign In with your email and password</p>
      <form>
        <label>Email</label>
        <input
          type="email"
          className="inputText"
          required
          autoComplete="on"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="inputText"
          required
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-button">
          <button className="signIn-button" onClick={submitHandler}>
            sign in
          </button>
          <button className="google-button" onClick={signInWithGoogle}>
            sign in with google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
