import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "../styles/VideoCard.css";
function VideoCard({
  _id,
  title,
  createdAt,
  views,
  likes,
  creator,
  creatorImg,
}) {
  return (
    <div className="video-card">
      <img
        src={`https://i.ytimg.com/vi/&{_id}/maxresdefault.jpg`}
        alt="thumbnail"
      />
      <BsFillPlayFill className="play-icon" />
      <div className="videoCard-details">
        <img src={creatorImg} alt="logo" className="creator-img" />
        <div className="details-container">
          <span className="title">{title}</span>
          <div>
            <span>
              {creator}-{views} views
            </span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
