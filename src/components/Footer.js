import React from 'react'
import './Footer.css'
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaInstagram className='icon' />
            <FaTwitterSquare className='icon' />
        </div>
        <div className='container'>
            <div className='fh'>
                <h3>Services</h3>
                <p>Quality Food</p>
                <p>Customer Satisfaction</p>
                <p>Fast Delivery</p>
            </div>
            <div className='fh'>
                <h3>About</h3>
                <p>Benefits </p>
                <p>Team</p>
                <p>About Us</p>
            </div>
        </div>

    </div>
  )
}

export default Footer