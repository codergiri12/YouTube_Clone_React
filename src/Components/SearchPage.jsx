import React from 'react'
import '../Comp_css/SearchPage.css';
import ChannelRow from './ChannelRow'
import TuneIcon from '@material-ui/icons/Tune';
import Search_VideoRow from './Search_VideoRow';

// this page is displayed when something is searched

function SearchPage(props) {

  //destructuring the props for getting data of response From API
  const data = props.videoData;

  //contains (list of Videos with video details)
  return (
    <>
      <div className="main_searchPage">

        {/* filter div */}
        <div className="searchPage_filter">
          <TuneIcon />
          <h2>FILTER</h2>
        </div>

        <hr />

        { 
          data.map(obj=>{
            return(
              <Search_VideoRow
                views="1.445M"
                subs="123K"
                description="this is the description"
                timestamp="1hr ago"
                channel={obj.snippet.channelTitle}
                title={obj.snippet.title}
                image={obj.snippet.thumbnails.high.url}
                videoIdVal= {obj.id.videoId}
              />
            )
          })
        }

      </div>
    </>
  )
}

export default SearchPage;
