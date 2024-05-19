'use client'

import Alert from '@/components/ui/Alert/Alert'
import React, { useEffect, useState } from 'react'
import RoadmapVideo from '../RoadmapVideo'

const Roadmap = () => {
  const [video, setVideo] = useState(false)

  useEffect(() => {
    setVideo(true)

    return () => setVideo(false)
  }, [])

  return (
    <div className="pt-14">
      <div className="container text-center">
        <Alert text="About Course" variant="gray" />
        <h2 className="title mt-4 mb-2 w-full xl:w-[60%] mx-auto ">
          Your Comprehensive Roadmap to Online Success
        </h2>
        <p className="para-md  w-full xl:w-[40%] mx-auto mb-16">
          Embark on a transformative journey towards digital marketing mastery
          with our comprehensive course.
        </p>
        {video && <RoadmapVideo />}
      </div>
    </div>
  )
}

export default Roadmap
