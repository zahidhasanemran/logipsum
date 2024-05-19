'use client'
import Alert from '@/components/ui/Alert/Alert'
import Card from '@/components/ui/Card'
import { curriculums } from '@/constants/data'
import { numberToTime } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const Curriculum = () => {
  return (
    <div className="pt-20 pb-20 bg-[#F0EFEB] ">
      <div className="container text-center">
        <Alert text="About Curriculum" variant="white" />
        <h2 className="title mt-4 mb-2 w-full xl:w-[60%] mx-auto ">
          Explore Our Comprehensive Course Curriculum
        </h2>
        <p className="para-md  w-full xl:w-[40%] mx-auto mb-12">
          Our curriculum is meticulously designed to empower you with the
          knowledge and skills necessary to excel
        </p>
        {/* CURRICULUM GRID */}
        <div className="curriculum-grid">
          {curriculums?.length > 0 &&
            curriculums?.map((sm: any) => (
              <Card key={sm?.id}>
                <div className="">
                  <Image
                    src="./assets/google.svg"
                    alt="icon"
                    width={38}
                    height={38}
                    className=""
                  />
                  <h3 className="mt-5 mb-3 font-bold font-space text-xl text-[#131313] ">
                    {sm?.title}
                  </h3>
                  <p className="para-md mb-5">{sm?.text}</p>
                  <div className="flex items-center  ">
                    <p className="para-md font-medium">
                      {sm?.lecture} Lectures |{' '}
                    </p>
                    <p className="para-md font-medium ml-1">
                      {' '}
                      {numberToTime(sm?.min)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Curriculum
