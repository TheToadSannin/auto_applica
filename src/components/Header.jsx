import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from "../assets/logo.svg";


const Header = () => {
  return (
    <header>
      <nav>
        <span><Logo height={120+"px"} width={120+"px"} viewBox={"0 0 500 300"}/></span>
        <ul>
          <li><Link to='/'>Home </Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><div className='logo'>L</div></li>
        </ul>
      </nav>
    </header>
  )
}



export default Header
