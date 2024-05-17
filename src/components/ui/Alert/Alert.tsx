import Image from 'next/image'
import React from 'react'

interface PropType {
  text: string
}

const Alert = ({ text }: PropType) => {
  return (
    <div className="inline-flex gap-x-3 py-3 px-6 rounded-3xl bg-whitegrey">
      <Image src="./assets/alert-icon.svg" alt="icon" width={20} height={20} />
      <p className="font-space font-medium text-base capitalize text-grey">
        {text}
      </p>
    </div>
  )
}

export default Alert
