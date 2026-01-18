import { Home } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='bg-slate-100'>
      <nav className='md:flex px-40 md:h-12.5 items-center'>
        <div className="logo md:w-37 text-center text-2xl font-bold text-blue-950 hover:font-extrabold cursor-pointer active:text-red-300 ">LOGO
          <Home/>
        </div>
        <menu className='md:flex md:w-1/2 text-center justify-evenly text-black'>
          <li ><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>HOME</Link></li>
          <li><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>ABOUT</Link></li>
          <li><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>SERVICES</Link></li>
          <li><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>GALLERY</Link></li>
          <li><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>BLOGS</Link></li>
          <li><Link className='hover:underline font-bold hover:text-blue-900' to={'/'}>CONTACT</Link></li>
        </menu>
      </nav>
    </header>
    </>
  )
}

export default Header
