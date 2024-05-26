import React, { useState } from 'react';
import './RoomDetails.css';
import logo from './assets/images/1234.jpg'; 

function RoomDetails() {
  const [formData, setFormData] = useState({
    images: [],
    bedroom: '',
    bathroom: '',
    balcony: '',
    kitchen: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: [...formData.images, ...files]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    
    setFormData({
      images: [],
      bedroom: '',
      bathroom: '',
      balcony: '',
      kitchen: '',
      address: ''
    });
  };

  return (
    <div className='form-container'>
      <form className='multi-image-form' onSubmit={handleSubmit}>
        <div className='form-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='form-group'>
          <label htmlFor='images'>Images<span>(select multiple image)</span></label>
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
