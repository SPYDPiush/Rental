import React, { useState } from 'react';
import './Login.css';
import logo from './assets/images/1234.jpg'; // Import your logo image

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here

    // Reset the form fields
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-logo'>
          <img src={logo} alt='logo' />
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
