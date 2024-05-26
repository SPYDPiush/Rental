import React, { useState } from 'react';
import './SignIn.css';
import logo from './assets/images/1234.jpg'; // Import your logo image

function SignIn() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    username: '',
    avatar: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Handle form submission logic here

    // Reset the form fields
    setFormData({
      fullName: '',
      email: '',
      password: '',
      username: '',
      avatar: null
    });
    // Manually reset the file input value
    e.target.reset();
  };

  return (
    <div className='form-container'>
      <form className='signin-form' onSubmit={handleSubmit}>
        <div className='form-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='form-group'>
          <label htmlFor='fullName'>Full Name</label>
          <input 
            type='text' 
            id='fullName' 
            name='fullName' 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' 
            id='password' 
            name='password' 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input 
            type='text' 
            id='username' 
            name='username' 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='avatar'>Avatar</label>
          <input 
            type='file' 
            id='avatar' 
            name='avatar' 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
