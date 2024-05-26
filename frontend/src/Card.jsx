import React from 'react'
import img1 from './assets/images/7og3nR.jpg'
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <div className='card_inner'>
        <div className='room_img'>
          <img src={img1} alt='room_img' />
        </div>
        <div className='room_desc'>
          <div className='bedroom'>
            BedRoom : <span>2</span>
          </div>
          <div className='Bathroom'>
            Bathroom : <span>1</span>
          </div>
          <div className='kitchen'>
            Kitchen : <span>1</span>
          </div>
          <div className="Balcony">
            Balcony : <span>2</span>
          </div>
        </div>
        <div className='room_add'>
          <span>Icon </span> anaadvihar basantganj 2023293
        </div>
        </div>
      
    </div>
  )
}

export default Card
