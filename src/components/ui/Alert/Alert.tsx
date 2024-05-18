import Image from 'next/image'
import React from 'react'

interface PropType {
  text: string
  variant: string
}

const Alert = ({ text, variant = 'white' }: PropType) => {
  const bgc = variant === 'white' ? 'bg-white' : 'bg-whitegrey'

  return (
    <div className={`inline-flex gap-x-3 py-3 px-6 rounded-3xl ${bgc}`}>
      <Image src="./assets/alert-icon.svg" alt="icon" width={20} height={20} />
      <p className="font-space font-medium text-base capitalize text-grey">
        {text}
      </p>
    </div>
  )
}

export default Alert
