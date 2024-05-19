import Alert from '@/components/ui/Alert/Alert'
import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa'

const OurInstructor = () => {
  return (
    <div className="instructor-wrapper">
      <div className="container">
        <div className="pt-32 pb-24 flex">
          <div className="w-full lg:w-[45%]">
            <div className="relative">
              <div className="instructor-image-bg">
                <Image
                  src="/assets/man.png"
                  alt="girl"
                  width={512}
                  height={760}
                  className=""
                />
              </div>
              <div className=" absolute z-10 bottom-[10%] w-[70%] left-[45%] ml-[-37%] ">
                <div className="bg-[#F0EFEB] outline outline-[#DBDBDB] py-8 px-8 text-center w-full  rounded-xl ">
                  <h5 className="font-inter text-grey font-medium text-base ">
                    INSTRUCTOR
                  </h5>
                  <h3 className="font-space font-bold leading-[125%] text-black text-[36px] mt-4 mb-8 ">
                    Ryan Mitchell
                  </h3>
                  <div className="flex gap-x-2 items-center justify-center">
                    <div className="bg-white px-2 py-2 rounded-lg ">
                      <FaInstagram size={18} />
                    </div>
                    <div className="bg-white px-2 py-2 rounded-lg ">
                      <FaFacebookF size={18} />
                    </div>
                    <div className="bg-white px-2 py-2 rounded-lg ">
                      <FaLinkedin size={18} />
                    </div>
                    <div className="bg-white px-2 py-2 rounded-lg ">
                      <FaYoutube size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <Alert text="Our Instructor" variant="grey" />
            <h2 className="title mt-4 mb-2 w-full ">
              Meet Your Expert Digital Marketing Sherpa
            </h2>
            <p className="para-md w-full mb-12">
              Meet our esteemed team of expert digital marketing instructors,
              each one a seasoned professional with a wealth of knowledge,
              experience, and a burning passion for the field.
            </p>

            <div className="rounded-2xl border my-5 border-[#F6F6F6] px-6 py-8 border-solid shadow-media-card relative ">
              <img
                src="./assets/comma.svg"
                alt="comma"
                className="absolute left-0 -top-[35px] w-[70px] "
              />
              <p className="font-inter font-medium text-grey text-xl text-center leading-[150%]">
                "As your dedicated instructor, I am thrilled to embark on this
                exciting journey with you, guiding you towards digital marketing
                mastery. Drawing from years of experience navigating the
                intricacies of online promotion, I'm here to offer you not just
                knowledge, but also practical insights and strategies honed
                through real-world challenges and successes.
              </p>
            </div>

            <div className="flex items-center gap-x-8 mt-12">
              <div className="flex gap-x-4">
                <div className="numbers">
                  <h1 className="font-space font-bold text-[30px] text-[#12141D] leading-[42px] tracking-[-1px] ">
                    10,291
                  </h1>
                  <p className="font-space text-base text-grey mt-0 ">
                    Total Student
                  </p>
                </div>
              </div>
              <div className="bg-grey h-[50px] w-[1px] border "></div>
              <div className="flex gap-x-4">
                <div className="numbers">
                  <h1 className="font-space font-bold text-[30px] text-[#12141D] leading-[42px] tracking-[-1px] ">
                    12+
                  </h1>
                  <p className="font-space text-base text-grey mt-0 ">
                    Years Experience
                  </p>
                </div>
              </div>
              <div className="bg-grey h-[50px] w-[1px] border "></div>
              <div className="flex gap-x-4">
                <div className="numbers">
                  <h1 className="font-space font-bold text-[30px] text-[#12141D] leading-[42px] tracking-[-1px] ">
                    300+
                  </h1>
                  <p className="font-space text-base text-grey mt-0 ">
                    Complete Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurInstructor
