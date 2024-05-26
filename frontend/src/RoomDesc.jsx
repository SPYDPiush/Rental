import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons
import './Roomdesc.css'; // Import your CSS file for styling

function RoomDesc({ photos, details }) {
  const [favorites, setFavorites] = useState(new Set());

  const handleFavoriteClick = (item) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(item)) {
      updatedFavorites.delete(item);
    } else {
      updatedFavorites.add(item);
    }
    setFavorites(updatedFavorites);
  };

  return (
    <div className="room-desc-container">
      <div className="photos-container">
        {photos.map((photo, index) => (
          <div className="photo-container" key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="details-container">
        {Object.entries(details).map(([key, value]) => (
          <div key={key}>{key}: {value}</div>
        ))}
        <div className="heart-icon" onClick={() => handleFavoriteClick('room')}>
          {favorites.has('room') ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
}

export default RoomDesc;
