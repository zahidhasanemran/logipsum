import Alert from '@/components/ui/Alert/Alert'
import Image from 'next/image'
import React from 'react'

const Faqs = () => {
  return (
    <div className="pb-24">
      <div className="container">
        <div className="">
          <div className="w-full lg:w-1/2">
            <Alert text="FAQ" variant="grey" />
            <h2 className="title mt-4 mb-2 w-full lg:w-2/3 ">
              Got Questions? We Have Answers!
            </h2>
            <p className="para-md w-full mb-12 lg:w-2/3">
              In our 'Got Questions? We Have Answers!' section, you'll find
              comprehensive solutions to all your queries regarding our digital
              marketing course.
            </p>
            <div className="relative">
              <Image
                src="/assets/girls.png"
                alt="girls"
                width={520}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
