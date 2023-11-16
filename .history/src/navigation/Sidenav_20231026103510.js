import React from 'react'
import "./Sidenav.css";
import LOGO from '../images/Instagram_logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
       className='sidenav__logo'
       src={LOGO} alt="Instagram Logo" 

       />

       <button className="sidenav__buttons">
        <div className="side__button">
          <HomeIcon/>
          <span>Home</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <SearchIcon/>
          <span>Search</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <ExploreIcon/>
          <span>Explore</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <SlideshowIcon/>
          <span>Reels</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <ChatIcon/>
          <span>Messages</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <FavoriteBorderIcon/>
          <span>Notifications</span>
        </div>
       </button>

       <button className="sidenav__buttons">
        <div className="side__button">
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </div>
       </button>

       
    </div>
  )
}

export default Sidenav