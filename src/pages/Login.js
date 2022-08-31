import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Login() {
  return (
    <div className="login">
      <nav>
        <ChevronLeftIcon />
        <Link to="/">
          <button>Back</button>
        </Link>
      </nav>

      <div className="login-container">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default Login;
