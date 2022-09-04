import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <a href="https://animeflex.netlify.app" target="_blank">
        <div className="banner-title">
          <p>AnimeFlex</p>
        </div>
        <div className="banner-desc">
          <p>Shop for Anime related Stuffs</p>
        </div>
        <div className="banner-explore">
          <h1>Explore</h1>
        </div>
      </a>
    </div>
  );
}

export default Banner;
