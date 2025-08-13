import React from 'react';
import './PersonCard.css';

function AgeUpdater({ person, onIncreaseAge }) {
  if (!person) return null;

  return (
    <div className="age-updater">
      <h2>Selected Person</h2>

      <div className="person-card">
        <img src={person.avatarURL} alt={person.name} className="avatar" />
        <h3>{person.name}</h3>
        <p>{person.city}, {person.country}</p>
        <p>{person.address}</p>
        <p>Edad: {person.age}</p>
        <button onClick={onIncreaseAge}>Increase Age</button>
      </div>
    </div>
  );
}

export default AgeUpdater;
