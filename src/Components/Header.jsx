import React, { useState } from "react";
import "../Comp_css/Header.css";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import yt_logo from "../images/yt.png";
import { Link } from "react-router-dom";

import youtube from '../Youtube_api/yt_api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Header(props) {

  //needed for styling avatar-icon
  const classes = useStyles();

  //stores the value in the input field
  const [inputSearch, setSearch] = useState("");
  let [respVal,changeResponse] = useState({});

  //this contains the whole data of search-field and send it to APP.JS
  let responseValue = {};

  //when left hamburger menu clicked
  var openingMenu = () => {
    var sideMenu = document.getElementById("nav-menu");
    sideMenu.classList.add("active");
  };

  //when search clicked-->get data from API ---->store it in responseVal--->send it to APP.JS
  var searchClicked = async ()=>{
    console.log('search clicked')
    const response = await youtube.get('search',{ params :{ q : inputSearch }});
    responseValue = response.data.items;

    props.onSearching(responseValue)
  }

  return (
    <>
      <div className="header fixed-top">
        {/* left side */}
        <div className="left_header_part common_header_parts">
          <a
            onClick={openingMenu}
            id="menubar_header"
            style={{ textDecoration: "none", color: "black",cursor:'pointer' }}
          >
            <MenuIcon />
          </a>
          <Link to={'/'}>
            <img className="yt_logo" src={yt_logo} alt="" />
          </Link>
        </div>

        {/* middle */}
        <div className="middle_header_part common_header_parts">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="search_box"
            placeholder="search"
            type="text"
          />
          <Link to={`search/${inputSearch}`}>
            <button className="search_btn" onClick={searchClicked}>
              <SearchIcon />
            </button>
          </Link>
        </div>

        {/* right side */}
        <div className="last_header_part common_header_parts">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar
            className={classes.small}
            alt="Remy Sharp"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu959zOneKkLWexNFuK-6Y3GiJLWfeTFLbXg5Np9gA=s32-c-mo"
          />
        </div>
      </div>
    </>
  );
}
