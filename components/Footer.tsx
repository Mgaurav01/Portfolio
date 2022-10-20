import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-9 rounded-full filter grayscale-0 hover:grayscale cursor-pointer'
            src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmREZNnKv4wK1SvqxrL8U0UuODvTspfHTkyvZJu2ZsJheXnKhcyylCFiKIBWD0ap3PIoQLc70Tw=w1920-h892'
            alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Footer