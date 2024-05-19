import Link from 'next/link'
import React from 'react'

interface LinkType {
  text: string
  link: string
  variant: 'primary' | 'secondary'
  display?: string
}

const PrimaryLink = ({
  text,
  link,
  variant = 'primary',
  display = 'inline-block',
}: LinkType) => {
  const variclass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  return (
    <Link className={`btn ${display} ${variclass}`} href={link}>
      {text}
    </Link>
  )
}

export default PrimaryLink
