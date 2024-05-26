import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from './Context/AuthContext';

function Navbar() {
  const { isLoggedIn, info, logout } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [profileDetailsVisible, setProfileDetailsVisible] = useState(false);
  const profileRef = useRef(null);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleAddPost = () => {
    navigate('/roomdesc');
  };

  const toggleProfileDetails = () => {
    setProfileDetailsVisible(!profileDetailsVisible);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileDetailsVisible(false);
    }
  };

  useEffect(() => {
    if (profileDetailsVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDetailsVisible]);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4040/user/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies if any
      });
      
      if (response.ok) {
        logout(); // Call the logout function from AuthContext to update the state
        navigate('/');
      } else {
        console.error('Failed to log out:', response.statusText);
        navigate('/')
      }
    } catch (error) {
      console.error('An error occurred while logging out:', error);
      navigate('/');
    }
  };

  return (
    <div className='Navbar'>
      <nav>
        <div className='nav_left'>
          <Link to="/">
            <img src="" alt='logo' />
          </Link>
        </div>
        <div className='nav_right'>
          <div className='rightElement'>
            <div className=''>
              <Link to='/'>Home</Link>
            </div>
            <div className=''>
              <Link to="/about">About Us</Link>
            </div>
            <div className=''>
              <Link to="/contact_us">Contact Us</Link>
            </div>
            <div className='user_profile'>
              {isLoggedIn ? (
                <div className='profile' onClick={toggleProfileDetails}>
                  <img src={info.avatar} alt='profile_img' />
                </div>
              ) : (
                <div className='login' onClick={handleLogin}>Login</div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isLoggedIn && profileDetailsVisible && (
        <div className="Profile_details" ref={profileRef}>
          <div className='profile_card'>
            <div className='profile_userName'>
              Profile UserName : <span>{info.username}</span>
            </div>
            <div className='profile_data'>
              <div className='email'>Email : <span> {info.email}</span></div>
              <div className='Full_Name'>Full_Name :<span> {info.fullName}</span></div>
              <div className='mobileno'>Mobile_No :<span> {info.mobile}</span></div>
              <div className='logout' onClick={handleLogout}>Logout</div>
              <div className='addpost' onClick={handleAddPost}>Add Post</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
