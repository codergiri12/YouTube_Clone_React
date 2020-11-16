import React from 'react'
import '../Comp_css/Search_VideoRow.css'
import YouTube from 'react-youtube';

//*#--------This page is shown  after something  is searched --------------*/
// #--------This will display all vidoes regarding searched value with all its details--------------------/

function Search_VideoRow({views,description,timestamp,channel,title,videoIdVal}){

  //this actually pauses the video on load(OR else all video will start running at a time :(   
  var playVideo= (e)=>{
    e.target.pauseVideo();
  }

  //contains (image,details)
  return (
    <>
      <div className="videoRow">
        <YouTube 
          className="yt_video_midSize"
          videoId={videoIdVal} 
          onReady={playVideo} 
        />
        <div className="videoRow_text">
          <h3>{title}</h3>
          <p>
            {channel} .  {views} Views . {timestamp}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Search_VideoRow
