import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header className="home-header" />
      <div className="home-container">
        <Slider />
      </div>
    </div>
  );
}

export default Home;
