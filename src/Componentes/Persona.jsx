import React from 'react';
import './PersonCard.css';

function PersonCard({ id, name, city, country, address, age, avatarURL, onSelect, onDelete }) {
  return (
    <div className="person-card">
      <img src={avatarURL} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p>{city}, {country}</p>
      <p>{address}</p>
      <p>Edad: {age}</p>

      <button onClick={() => onSelect(id)}>Select</button>
      
    </div>
  );
}

export default PersonCard;
