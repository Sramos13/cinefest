import React from 'react';
import PersonCard from './Persona';
import './PersonCard.css';
import { useNavigate } from 'react-router-dom'; 

function PersonCardList({ persons, onSelect, onDelete }) {
  const allowed = persons.filter(p => p.age >= 18);
  const notAllowed = persons.filter(p => p.age < 18);
  const navigate = useNavigate(); 

  return (
    <div>
      <h1>CINEFEST MANAGER (NOMINA)</h1>
      <h2>Allowed</h2> {}
      <div className="card-container">
        {allowed.map(person => (
          <PersonCard
            key={person.id}
            {...person}
            onSelect={onSelect}
            //onDelete={onDelete}
          />
        ))}
      </div>

      <h2>Not Allowed</h2>
      <div className="card-container">
        {notAllowed.map(person => (
          <PersonCard
            key={person.id}
            {...person}
            onSelect={onSelect}
            //onDelete={onDelete}
          />
        ))}
      </div>

    
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Regresar al Inicio</button>
      </div>
    </div>
  );
}

export default PersonCardList;
