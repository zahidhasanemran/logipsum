import { menus } from '@/constants/data'
import Link from 'next/link'
import React from 'react'
import PrimaryLink from '../Link/PrimaryLink'

const Header = (): React.ReactNode => {
  return (
    <div className="absolute left-0 top-0 w-full ">
      <div className="container">
        <div className="flex items-center justify-between py-3 ">
          {/* Logo Start */}
          <div className="">
            <picture>
              <source type="image/webp" srcSet="./assets/logipsum.webp" />
              <source type="image/svg+xml" srcSet="./assets/logipsum.svg" />
              <img src="./assets/logipsum.png" alt="Logipsum" />
            </picture>
          </div>
          {/* Logo Ends  */}

          {/* Center Menu start */}
          <nav className="flex">
            {menus.length > 0 &&
              menus.map((sm: any) => (
                <Link
                  key={sm.id}
                  className="text-grey px-6 py-4 font-bold font-space capitalize text-lg "
                  href={sm?.link}
                >
                  {sm?.title}
                </Link>
              ))}
          </nav>
          {/* Center Menu Ends */}

          {/* Right menu start */}
          <div className="flex gap-4 ">
            <PrimaryLink
              link="/auth/login"
              text="Sign In"
              variant="secondary"
            />

            <PrimaryLink
              link="/webinar"
              text="Free Webinar"
              variant="primary"
            />
          </div>
          {/* Right menu ends */}
        </div>
      </div>
    </div>
  )
}

export default Header
