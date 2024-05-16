import Link from 'next/link'
import React from 'react'

interface LinkType {
  text: string
  link: string
  variant: 'primary' | 'secondary'
}

const PrimaryLink = ({ text, link, variant = 'primary' }: LinkType) => {
  const variclass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  return (
    <Link className={`btn ${variclass}`} href={link}>
      {text}
    </Link>
  )
}

export default PrimaryLink
