import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "../styles/VideoCard.css";
import { useNavigate } from "react-router-dom";
function VideoCard({
  _id,
  title,
  createdAt,
  views,
  likes,
  creator,
  creatorImg,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${_id}`);
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <img
        // src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
        src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
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
