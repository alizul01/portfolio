"use client"
import React, { useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <nav className='flex justify-between p-4 sticky top-0'>
        <div className='hover:bg-surface-200 p-2'>
          {/* on progress */}
        </div>
    </nav>
  )
}

export default Navbar