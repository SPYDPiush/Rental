import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomDetails.css';
import logo from './assets/images/1234.jpg'; 

function RoomDetails() {

  const navigate =  useNavigate()
  const [formData, setFormData] = useState({
    images: [],
    bedroom: '',
    bathroom: '',
    balcony: '',
    kitchen: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (files) {
      const imageFiles = Array.from(files); 
      setFormData({
        ...formData,
        [name]: imageFiles 
      });
    } else {
      const { value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formData.images.forEach((image) => {
        formDataToSend.append('images', image); 
      });
      formDataToSend.append('bedroom', formData.bedroom);
      formDataToSend.append('bathroom', formData.bathroom);
      formDataToSend.append('balcony', formData.balcony);
      formDataToSend.append('kitchen', formData.kitchen);
      formDataToSend.append('address', formData.address);

      const response = await fetch('http://localhost:4040/post/addPost', { 
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        navigate('/')
        console.log('Form data sent successfully!');

        
      } else {
        console.error('Failed to send form data:', response.statusText);
        
      }
    } catch (error) {
      console.error('An error occurred while sending form data:', error);
      
    }

    setFormData({
      images: [],
      bedroom: '',
      bathroom: '',
      balcony: '',
      kitchen: '',
      address: ''
    });
    e.target.reset();
  };

  return (
    <div className='form-container'>
      <form className='multi-image-form' onSubmit={handleSubmit}>
        <div className='form-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='form-group'>
          <label htmlFor='images'>Images<span>(select multiple images)</span></label>
          <input 
            type='file' 
            id='images' 
            name='images' 
            multiple 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='form-group flex-row'>
          <div className='flex-item'>
            <label htmlFor='bedroom'>Bedroom</label>
            <input 
              type='number' 
              id='bedroom' 
              name='bedroom' 
              value={formData.bedroom} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='flex-item'>
            <label htmlFor='bathroom'>Bathroom</label>
            <input 
              type='number' 
              id='bathroom' 
              name='bathroom' 
              value={formData.bathroom} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className='form-group flex-row'>
          <div className='flex-item'>
            <label htmlFor='kitchen'>Kitchen</label>
            <input 
              type='number' 
              id='kitchen' 
              name='kitchen' 
              value={formData.kitchen} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='flex-item'>
            <label htmlFor='balcony'>Balcony</label>
            <input 
              type='number' 
              id='balcony' 
              name='balcony' 
              value={formData.balcony} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input 
            type='text' 
            id='address' 
            name='address' 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default RoomDetails;
