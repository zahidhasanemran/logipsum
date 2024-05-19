import Alert from '@/components/ui/Alert/Alert'
import React from 'react'

const PricingPlan = () => {
  return (
    <div className="pt-12 pb-6">
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
        </div>
      </div>
    </div>
  )
}

export default PricingPlan
