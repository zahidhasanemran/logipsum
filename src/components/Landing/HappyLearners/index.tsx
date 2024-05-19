import { learners } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

const HappyLearners = () => {
  return (
    <div className="flex items-center gap-x-8 mt-14">
      <div className="flex gap-x-4">
        <div className="flex ml-5 ">
          {learners.map((sm: any) => (
            <div className="-ml-5 cursor-pointer" key={sm?.id}>
              <Image
                src={sm?.link}
                alt={sm?.name}
                width={60}
                height={60}
                className="rounded-3xl"
              />
            </div>
          ))}
        </div>
        <div className="numbers">
          <h1 className="font-space font-bold text-[30px] text-[#12141D] leading-[42px] tracking-[-1px] ">
            10,291
          </h1>
          <p className="font-space text-base text-grey mt-0 ">Happy Learner</p>
        </div>
      </div>
      <div className="bg-grey h-[50px] w-[1px] border "></div>
      <div className="right">
        <h1 className="font-space font-bold text-[30px] text-[#12141D] leading-[42px] tracking-[-1px] ">
          4.8/5
        </h1>
        <div className="flex gap-x-3 items-center ">
          <FaStar color="#FFC947" />
          <FaStar color="#FFC947" />
          <FaStar color="#FFC947" />
          <FaStar color="#FFC947" />
          <FaRegStar color="#ddd" />
          <p className="font-space text-base text-grey mt-0 ">Rating</p>
        </div>
      </div>
    </div>
  )
}

export default HappyLearners
