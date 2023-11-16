import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Post = () => {
  return (
    <div className='post'>
      <div className="post__header">
      <div className="post__headerAuthor">
      <Avatar>R</Avatar>
         redian_. <span>12h</span>
      </div>
         <MoreHorizIcon/>
      </div>
      <div className="post__image">
        <img
          src='https://images.pexels.com/photos/18193282/pexels-photo-18193282/free-photo-of-people-kitesurfing-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
      </div>
      <div className="post__footer"></div>
    </div>
  )
}

export default Post