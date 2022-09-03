import React from "react";
import "./DetailButton.css";
import { Link } from "react-router-dom";

function DetailButton() {
  return (
    <div className="detail">
      <Link to="./">
        <button className=" --btn --btn-primary detail">
          <h2>Details</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default DetailButton;
