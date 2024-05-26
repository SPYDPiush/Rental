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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('userName', formData.username);
      formDataToSend.append('avatar', formData.avatar);
  
      const response = await fetch('http://localhost:4040/user/register', {
        method: 'POST',
        body: formDataToSend
      });
  
      if (response.ok) {
        console.log('Form data sent successfully!');
        // Handle any further logic after successful form submission
      } else {
        console.error('Failed to send form data:', response.statusText);
        // Handle error cases here
      }
    } catch (error) {
      console.error('An error occurred while sending form data:', error);
      // Handle error cases here
    }
  
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
