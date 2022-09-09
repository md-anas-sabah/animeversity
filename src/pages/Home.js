import { useState, useEffect } from "react";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";
import "../styles/Home.css";
import TopAnime from "../components/TopAnime";
import Footer from "../components/Footer";
import VideoCard from "../components/VideoCard";
import { videos } from "./VideoPage/VideoPage-data";

function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    setTopAnime(temp.top.slice(0, 12));
    console.log(topAnime);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    setAnimeList(temp.results);
  };

  return (
    <div className="home">
      <Header
        HandleSearch={handleSearch}
        search={search}
        animeList={animeList}
        SetSearch={SetSearch}
      />

      <div className="home-container">
        <Slider />
        <Banner />
        <TopAnime topAnime={topAnime} />
        <h1 className="amv-h1">Watch Anime Trailer/AMV Online</h1>
        <div className="amv">
          {videos.map((video) => (
            <VideoCard
              key={video._id}
              _id={video._id}
              title={video.title}
              creatorImg={video.creatorImg}
              createdAt={video.createdAt}
              views={video.views}
              likes={video.likes}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
