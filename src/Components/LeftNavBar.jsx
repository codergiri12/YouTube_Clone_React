import React from 'react'
import '../Comp_css/LeftNavBar.css'

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Trending from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import YourVideoIcon from '@material-ui/icons/OndemandVideo';
import YourMovies from '@material-ui/icons/Theaters';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import yt_logo from '../images/yt.png'

/* this is left navigation Bar which opens when clicked hamburger menu  */


export default function LeftNavBar() {

  //closes left menu to normal stage
  var closingMenu = ()=>{
    var sideMenu = document.getElementById('nav-menu');
    sideMenu.classList.remove('active')
  }
  return (
    <>
      <nav className="nav-menu" id="nav-menu">
        <ul className="nav-menu-items">

          {/** hamburger & YT logo */}
          <div id="nav-bar-toggle">
            <a style={{cursor:'pointer'}} onClick={closingMenu} className="menu-bars" id="hide-menu">
              <MenuIcon />
            </a>
            <a href="#">
              <img 
                className="yt_logo__leftnav"
                src={yt_logo} alt=""
              />
            </a>
          </div>

          {/* home, Trending , Subs */}
          <div id="nav-section">
            <li className="nav-text selected">
              <a href="#">
                <HomeIcon />
                Home
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <Trending />
                Trending
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <SubscriptionsIcon />
                Subscriptions
              </a>
            </li>
          </div>
          
          <hr />
          {/* other below links */}
          <div id="nav-section">
            <li className="nav-text">
              <a href="#">
                <VideoLibraryIcon />
                Library
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <HistoryIcon />
                History
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <YourVideoIcon />
                Your Videos
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <YourMovies />
                Your Movies
              </a>
            </li>
            <li className="nav-text">
              <a href="#">
                <WatchLaterIcon />
                Watch Later
              </a>
            </li>
          </div>

        </ul>
      </nav>
    </>
  )
}
