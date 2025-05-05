import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-black w-screen flex items-center justify-center p-10 text-white gap-13 cursor-pointer'>
       {/* <Link href="/">
        <a>
          <Image src="/public/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg" alt="Logo" width={120} height={50} />
        </a>
      </Link> */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contactus">ContactUs</Link>
        <Link href="/projects">Projects</Link>
    </div>
  )
}
export default Header
