import React from "react";
import "../styles/TopAnime.css";

function TopAnime({ topAnime }) {
  return (
    <div className="topAnime">
      <h1>Top Anime</h1>
      <div className="topAnime-links">
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            key={anime.mal_id}
          >
            <img src={anime.image_url} alt="img" className="transform" />
            <p className="green">{anime.title}</p>
          </a>
        ))}
      </div>
    
    </div>
  );
}

export default TopAnime;
