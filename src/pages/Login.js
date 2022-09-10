import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Login() {
  const navigate = useNavigate();
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

        <div className="goto">
          <h2>New To Animeversity?</h2>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
