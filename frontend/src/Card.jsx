import React, { useState } from 'react';
import './Card.css';
import { FaHeart } from 'react-icons/fa';

function Card({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(23);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className='card'>
      <div className='card_inner'>
        <div className='room_img'>
          <img src={post.images[0]} alt='room_img' />
        </div>
        <div className='room_desc'>
          <div className='bedroom'>
            BedRoom : <span>{post.bedroom}</span>
          </div>
          <div className='Bathroom'>
            Bathroom : <span>{post.bathroom}</span>
          </div>
          <div className='kitchen'>
            Kitchen : <span>{post.kitchen}</span>
          </div>
          <div className="Balcony">
            Balcony : <span>{post.balcony}</span>
          </div>
        </div>
        <div className='room_add'>
          <span> </span> {post.address}
        </div>
        <div className='heart_icon' onClick={handleLikeClick}>
          <FaHeart className={isLiked ? 'heart liked' : 'heart'} />
          <span className='heart_count'>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
