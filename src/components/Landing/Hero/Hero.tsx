import React from 'react'
import Alert from '../../ui/Alert/Alert'
import PrimaryLink from '../../ui/Link/PrimaryLink'
import HappyLearners from '../HappyLearners'
import Image from 'next/image'
import MediaCard from '../../ui/Card/MediaCard'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="pt-32 pb-12 flex">
          <div className="w-full lg:w-1/2">
            <Alert text="Best Online Course" variant="grey" />
            <h1 className="font-space text-lightblack font-bold text-[80px] tracking-[-1px] leading-[120%] py-5 ">
              Master the Art of Digital Domination
            </h1>
            <p className="para-lg">
              Our cutting-edge course is your passport to navigating the dynamic
              landscape of online marketing with finesse and precision.
            </p>

            <div className="flex gap-4 mt-12 ">
              <PrimaryLink
                link="/auth/login"
                text="Enroll Now"
                variant="primary"
              />

              <PrimaryLink
                link="/contact"
                text="Contact Us"
                variant="secondary"
              />
            </div>

            <HappyLearners />
          </div>
          <div className="right">
            <div className="relative">
              <div className="min-w-[300px] inline-block absolute -left-1/4 z-10 top-[25%]  ">
                <MediaCard
                  icon="/assets/duration.svg"
                  title="Duration"
                  text="24 Weeks Long"
                />
              </div>
              <div className="hero-image-bg">
                <Image
                  src="/assets/girl.png"
                  alt="girl"
                  width={760}
                  height={720}
                  className=""
                />
              </div>
              <div className="min-w-[300px] inline-block absolute -right-[100px] z-10 bottom-[20%] ">
                <MediaCard
                  icon="/assets/success-rate.svg"
                  title="90%"
                  text="Success Rate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
