import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import BrandSlider from '../BrandSlider'

const JobPlacement = () => {
  return (
    <div className="pt-12">
      {/* Stars at top */}
      <div className="flex gap-x-2 items-center justify-center ">
        <FaStar size={20} color="#40798C" />
        <FaStar size={20} color="#40798C" />
        <FaStar size={20} color="#40798C" />
        <FaStar size={20} color="#40798C" />
        <FaStar size={20} color="#40798C" />
      </div>
      <h6 className="font-space font-medium text-[#A0A0A0] mt-4 text-2xl text-center ">
        Job Placement Opportunity With Over{' '}
        <span className="text-[#131313]">1500+</span> Companys
      </h6>
      {/* BRAND SLIDER */}
      <BrandSlider />
    </div>
  )
}

export default JobPlacement
