import Image from 'next/image'
import React from 'react'

interface Propstpe {
  icon: string
  title: string
  text: string
}

const MediaCard = ({ icon, title, text }: Propstpe) => {
  return (
    <div className="rounded-lg py-2 px-4 bg-white w-auto shadow-media-card flex items-center gap-x-4 ">
      <div className="">
        <Image src={icon} alt="icon" width={52} height={52} />
      </div>
      <div className="">
        <h4 className="font-space mb-0 font-bold text-[32px] leading-[120%] text-black ">
          {title}
        </h4>
        <p className="font-space text-[20px] mt-0 leading-[120%] text-grey">
          {text}
        </p>
      </div>
    </div>
  )
}

export default MediaCard
