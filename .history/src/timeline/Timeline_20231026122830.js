import React from 'react'
import "./Timeline.css"
import Suggesstions from './Suggesstions'
import Post from "./posts/Post"

function Timeline() {
  return (
    <div className="timeline">
    <div className="timeline__left">
       <div className="timeline__posts">
         <Post/>
         <Post/>
         <Post/>

      </div>
    </div>
    <div className="timeline__right"></div>
          <Suggesstions/>
    </div>
  )
}

export default Timeline