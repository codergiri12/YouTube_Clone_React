import React,{ useState , useEffect } from "react";
import "../Comp_css/Recommended.css";
import yt from '../Youtube_api/yt_homePageAPI'

import VideoCard from "./VideoCard";


/*---------------------------This Component will contains all the videos in Home Page---------------------------*/

export default function Recommended() {
  //getting search field data
  var inputSearch = '';

  //stores response from API into this state
  var [responseValue,setResponseVal] = useState([])

  //getting data from API on page load
  useEffect(() => {
    searchClicked();
    console.log(responseValue)
  }, []);

  //searchClicked--->gets data from API-->stores in variable---->display it in below main HOME container
  var searchClicked = async ()=>{
    console.log('search clicked')
    const response = await yt.get('search',{ params :{ q : inputSearch }});
    setResponseVal(response.data.items);
  }
  return (
    <>
      <div className="main_container" id="main_container">
        {
          responseValue.map(obj=>{
            return(
              <VideoCard
                thumbnail={obj.snippet.thumbnails.medium.url}
                title={obj.snippet.title}
                channel={obj.snippet.channelTitle}
                views="1M Views"
                timestamp="1week Ago"
                channellogo="https://picsum.photos/23/23"
                videoIdVal={obj.id.videoId}
              />
            )
          })
        }
      </div>
    </>
  );
}
