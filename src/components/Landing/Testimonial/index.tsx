'use client'
import Alert from '@/components/ui/Alert/Alert'
import Card from '@/components/ui/Card'
import Designation from '@/components/ui/Media/Designation'
import { testimonials } from '@/constants/data'
import { numberToTime } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className="pt-20 pb-20 bg-[#131313] ">
      <div className="container text-center">
        <Alert text="Testimonial" variant="white" />
        <h2 className="title-white mt-4 mb-2 w-full xl:w-[60%] mx-auto ">
          Hear from Our Satisfied Students
        </h2>
        <p className="para-md-white  w-full xl:w-[40%] mx-auto mb-12">
          In our 'Voices of Success' section, you'll find inspiring testimonials
          from our satisfied students who have embarked
        </p>
        {/* CURRICULUM GRID */}
        <div className="curriculum-grid">
          {testimonials?.length > 0 &&
            testimonials?.map((sm: any) => (
              <Card key={sm?.id}>
                <div className="">
                  <Image
                    src="./assets/comma.svg"
                    alt={sm?.title}
                    width={40}
                    height={40}
                    className=""
                  />
                  <p className="mt-5 mb-9 font-medium font-inter text-base text-grey ">
                    {sm?.text}
                  </p>

                  <Designation
                    img={sm?.img}
                    title={sm?.title}
                    desig={sm?.designation}
                  />
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
