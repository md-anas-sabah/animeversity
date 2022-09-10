import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Header from "../components/Header";
import { AiOutlineLike } from "react-icons/ai";
import { videos } from "./VideoPage/VideoPage-data";
import { MdAccessTime, MdPlaylistAdd } from "react-icons/md";

import "./VideoPage/VideoPage.css";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  const vid = videos && videos.find((vid) => vid._id === id);

  useEffect(() => {
    setVideo({ ...vid });
  }, [vid]);

  return video ? (
    <div className="videoPage">
      <Header />
      <div className="video-container">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video._id}`}
          loop="true"
          width="100vw"
          height="60vh"
          border-radius="20px"
          controls="true"
        />
        <div className="video-container-footer">
          <p className="video-title">{video.title}</p>
          <div className="video-details">
            <div>
              <span className="likes">{video.views} views • </span>
              <span className="date">{video.createdAt}</span>
            </div>
            <div className="video-actions">
              <div className="flex align-center">
                <AiOutlineLike />
                <span>{video.likes}</span>
              </div>
              <div className="flex align-center">
                <MdAccessTime />
                <span>Watch Later</span>
              </div>
              <div className="flex align-center">
                <MdPlaylistAdd />
                <span>Add to Playlist</span>
              </div>
            </div>
          </div>
          <div className="creator-container">
            <img
              src={video.creatorImg}
              alt="creator-logo"
              className="creator-img"
            />
            <div>
              <div className="subs">
                <span className="creator">{video.creator}</span>
                <span className="subscriber">
                  {video.subscriber} <span>Subscriber</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default VideoPage;
