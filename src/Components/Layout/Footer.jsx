import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='myAlignment fixed bottom-0 left-0 w-full bg-gray-800 text-gray-200 p-4 items-center '>
      {/* Footer */}
      <ul className='flex flex-col items-center lg:flex-row lg:justify-evenly lg:gap-8 p-4 '>
        <li><Link className='font-bold cursor-pointer hover:underline hover:text-teal-600 hover:text-2xl' to={'/contact'}>Contact Us</Link></li>
        <li><Link className='font-bold cursor-pointer hover:underline hover:text-teal-600 hover:text-2xl' to={'/privacyandsecurity'}>Privacy and Security</Link></li>
        <li><Link className='font-bold cursor-pointer hover:underline hover:text-teal-600 hover:text-2xl' to={'/Termsandcondition'}>Terms and Conditions</Link></li>
        
      </ul>
    </div>
  )
}

export default Footer
