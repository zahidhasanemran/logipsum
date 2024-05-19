import Image from 'next/image'
import React from 'react'

const Designation = ({ img, title, desig }: any) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="">
        <Image src={img} alt="" width={50} height={50} />
      </div>
      <div className="">
        <h5 className="font-space font-bold text-lg text-[#131313] leading-[160%] ">
          {title}
        </h5>
        <p className="text-grey font-normal leading-[160%] font-inter text-[12px]  ">
          {desig}
        </p>
      </div>
    </div>
  )
}

export default Designation
