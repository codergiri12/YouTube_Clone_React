import React from "react";
import "../Comp_css/VideoCard.css";
import YouTube from 'react-youtube';
import Avatar from "@material-ui/core/Avatar";

// This contains set of video list and all are displayed in Home Page

function VideoCard({thumbnail,title,channel,views,timestamp,channellogo,videoIdVal}) {

  //pauses youtube video defaultly
  var playVideo= (e)=>{
    e.target.pauseVideo();
  }

  //contains (video, title , channel Name, logo , all Details)
  return (
    <>
      <div className="videoCard">

        <YouTube 
          className="yt_video_midSize"
          videoId={videoIdVal} 
          onReady={playVideo} 
        />
        <div className="videoCard_info">

          {/* channel_logo */}
          <div className="videoCard_info_top">
            <Avatar
              className="videoCard_avatar"
              src={channellogo}
            />
          </div>

          {/* text below video */}
          <div className="video_text">
            <h6>{title}</h6>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
