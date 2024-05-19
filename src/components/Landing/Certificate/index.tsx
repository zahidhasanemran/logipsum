import Alert from '@/components/ui/Alert/Alert'
import MediaList from '@/components/ui/Media/MediaList'
import { certifiedFeatures } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const Certified = () => {
  return (
    <div className="bg-[#F0EFEB] py-20">
      <div className="container">
        <div className="block lg:flex lg:items-center justify-between">
          <div className="w-full lg:w-3/5 ">
            <Alert text="Certificate" variant="white" />
            <h2 className="title mt-4 mb-2 w-full ">
              Become a Certified Digital Marketer
            </h2>
            <p className="para-md w-full mb-9 lg:w-2/3">
              In our Certificate Section, we celebrate your dedication and
              accomplishment in mastering the art of digital marketing.
            </p>
            <div className="lists">
              {certifiedFeatures?.length > 0 &&
                certifiedFeatures.map((sm: any) => (
                  <MediaList key={sm?.id}>
                    <div>
                      <Image
                        src="/assets/tik.svg"
                        alt="ok"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="text-grey font-medium font-inter text-base leading-[160%] ">
                      {sm?.text}
                    </p>
                  </MediaList>
                ))}
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <Image
              src="/assets/certificate.png"
              alt="certificate"
              width={582}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certified
