import React from "react";
import "../styles/Footer.css";

function Footer() {
  //   const date = new Date();
  //   date.getFullYear();
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <p>@{getYear()} Copyright:Animeveristy</p>
    </div>
  );
}

export default Footer;
