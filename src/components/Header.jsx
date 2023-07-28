import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-center'>
      <nav className='flex w-2/3 justify-between py-4 text-lg'>
        <span>Auto Applica</span>
        <ul className='flex space-x-10'>
          <li><Link to='/'>Home </Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

//| ----- | ----- | ----- |