// 'use client'

import React from 'react'
import ReactPlayer from 'react-player'

const RoadmapVideo = () => {
  return (
    <div className="pb-24">
      <div className="container mx-auto ">
        <div className="text-center mx-auto player-wrpper">
          <ReactPlayer
            className="react-player-custom"
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            width="100%"
            height="100%"
            // playIcon={<h1>Hi</h1>}
            muted
            light={<img src="./assets/video-girl.jpg" alt="Thumbnail" />}
          />
        </div>
      </div>
    </div>
  )
}

export default RoadmapVideo
