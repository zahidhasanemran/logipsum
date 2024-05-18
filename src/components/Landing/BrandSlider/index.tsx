'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'
import { brands } from '@/constants/data'

const BrandSlider = () => {
  return (
    <div className="mt-8 mb-12 container brands-slider ">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {brands.length > 0 &&
          brands.map((sm) => (
            <SwiperSlide key={sm?.id}>
              <Image
                src={sm?.link}
                alt=""
                width={sm?.width}
                height={sm?.height}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default BrandSlider
