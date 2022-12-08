import React from 'react'
import {SiAudiomack} from 'react-icons/si'
import {BsCartPlusFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='container'>
      <h1><span><SiAudiomack/> Groceries</span></h1>
      <a href='/signup'><button className='btn'>Sign In</button></a>
      <ul className='nav-menu'>
        <li><a href='/'>Home</a></li>
        <li><a href='/ourgroceries'>Our Groceries</a></li>
        <li><a href='/addgroceries'>Add Groceries</a></li>
        <li><a href='/cart'><BsCartPlusFill className='icon'/><span>Cart</span></a></li>
        
      </ul>
      <div classname="hioutline">
      </div>
      </div>
      
    </div>
  )
}

export default Navbar