"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className='flex justify-between p-1 sticky top-0 backdrop-blur-sm bg-black/30 z-50'>
        <Link href="/" className='hover:bg-surface-200 p-px rounded-lg'>
          <Image src="/img/ava-2.png" width={50} height={50} alt="logo" />
        </Link>
    </div>
  )
}

export default Navbar