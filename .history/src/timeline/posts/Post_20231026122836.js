import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'

const Post = () => {
  return (
    <div className='post'>
      <div className="post__header">
         <Avatar>R</Avatar>
         redian_. <span>12</span>
      </div>
      <div className="post__image"></div>
      <div className="post__footer"></div>
    </div>
  )
}

export default Post