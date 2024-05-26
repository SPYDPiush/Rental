import React from 'react'
import './Navbar.css'
import img from './assets/images/1234.jpg'
function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <div className='nav_left'>
          <img src={img} alt='logo' />
        </div>
        <div className='nav_center'>
          <input type="search" placeholder='Enter City  Name' />
        </div>
        <div className='nav_right'>
          <div className='rightElement'>
            <div className=''>
              Home
            </div>
            <div className=''>
              About Us
            </div>
            <div className=''>
              Contact Us
            </div>
            <div className='user_profile'>
              <div className='profile'>
                <img src={img} alt='profile_img' />
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
