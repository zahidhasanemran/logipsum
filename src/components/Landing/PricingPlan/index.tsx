import Alert from '@/components/ui/Alert/Alert'
import PrimaryLink from '@/components/ui/Link/PrimaryLink'
import React from 'react'
import { FaHandPointRight } from 'react-icons/fa'

const PricingPlan = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container">
        <div className="text-center">
          <Alert text="Pricing" variant="gray" />
          <h2 className="title mt-4 mb-2 w-full xl:w-[60%] mx-auto ">
            Our Best Pricing Plans
          </h2>
          <p className="para-md  w-full xl:w-[40%] mx-auto mb-5">
            Our pricing structure is designed to be transparent, flexible, and
            accessible, ensuring that everyone has
          </p>

          {/* PRICING TABLES  */}
          <div className="flex gap-x-8 mt-12 pb-12">
            {/* SINGLE PRICE CARD */}
            {[1, 2].map((sm: any) => (
              <div
                className="rounded-lg py-6 px-8 bg-[#F0EFEB] w-full lg:w-1/2"
                key={sm}
              >
                <div className="flex items-center gap-x-4">
                  <div className="">
                    <div className="text-lg font-bold font-space text-grey leading-[135%] px-6 py-4 rounded-full bg-white mb-4 ">
                      Early Bird Offer
                    </div>
                    <h1 className="font-space font-bold text-[48px] text-[#131313] leading-[110%] ">
                      $100
                    </h1>
                  </div>
                  <div className="border ml-12 mr-6 border-solid border-[#CDCDCD] h-[100px] "></div>
                  <ul>
                    <li className="flex gap-x-3 mb-3">
                      <FaHandPointRight />
                      <p className="para-md text-left">Pay in full Advance</p>
                    </li>
                    <li className="flex gap-x-3 mb-3">
                      <FaHandPointRight />
                      <p className="para-md text-left">
                        Discounted Price: $100 (Save $20)
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="border border-[#CDCDCD] border-solid my-6 w-full h-[1px] "></div>
                <div className="pt-2 w-full">
                  <PrimaryLink
                    text="Enroll Now"
                    link="/"
                    variant="primary"
                    display="block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan
