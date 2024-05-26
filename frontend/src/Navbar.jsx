import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';
import img from './assets/images/1234.jpg';
import { AuthContext } from './Context/AuthContext'; // Import AuthContext

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='Navbar'>
      <nav>
        <div className='nav_left'>
          <img src={img} alt='logo' />
        </div>
        <div className='nav_center'>
          <input type="search" placeholder='Enter City Name' />
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
              {isLoggedIn ? (
                <div className='profile'>
                  <img src={img} alt='profile_img' />
                </div>
              ) : (
                <div className='login' onClick={handleLogin}>
                  Login
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
