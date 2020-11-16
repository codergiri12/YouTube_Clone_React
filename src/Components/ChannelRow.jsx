import React from "react";
import "../Comp_css/ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

/* ------This contains data of youtube channel which searched*/

/* Actually I'm not using It bcz i can't able to get data of youtube channel from API :( */

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <>
      <div className="channelRow">
        <Avatar 
          className="channelRow_logo" 
          src={image}
        />
        <div className="channelRow_text">
          <h4>
            {channel} {verified && <CheckCircleRoundedIcon /> }
          </h4>
          <p>{subs} • {noOfVideos} </p>
          <p>{description} </p>
        </div>
      </div>
    </>
  );
}

export default ChannelRow;
