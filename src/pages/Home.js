import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <Slider />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
