import React from "react";
import { BsFillPlayFill } from "react-icons/ai";

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
      <div className="videoCard-details"></div>
    </div>
  );
}

export default VideoCard;
