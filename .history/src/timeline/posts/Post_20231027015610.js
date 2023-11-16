import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({user, postImage, likes, timestamp}) => {
  return (
    <div className='post'>
      <div className="post__header">
      <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
         <MoreHorizIcon/>
      </div>
      <div className="post__image">
        <img
          src='https://images.pexels.com/photos/18193282/pexels-photo-18193282/free-photo-of-people-kitesurfing-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon"/>
            <ChatBubbleOutlineIcon className="postIcon"/>
            <TelegramIcon className="postIcon"/>
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className='postIcon'/>
          </div>
        </div>
        Liked by 22 people
      </div>
    </div>
  )
}

export default Post