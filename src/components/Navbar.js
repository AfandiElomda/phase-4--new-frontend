import React from 'react'
import {SiAudiomack} from 'react-icons/si'
import {BsCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='container'>
      <h1><span><SiAudiomack/> Groceries</span></h1>
      <Link to='/signup'><button className='btn'>Sign In</button></Link>
      <ul className='nav-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourgroceries'>Our Groceries</Link></li>
        <li><Link to='/addgroceries'>Add Groceries</Link></li>
        <li><Link to='/cart'><BsCartPlusFill className='icon'/><span>Cart</span></Link></li>
        
      </ul>
      <div classname="hioutline">
      </div>
      </div>
      
    </div>
  )
}

export default Navbar