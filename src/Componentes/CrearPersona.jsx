import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonCard.css'; 

function CrearPersona({ onAgregar }) {
  const navigate = useNavigate();

  // campo formulario 
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !city || !country || !address || !avatarURL || !age) {
      alert('ERROR, Ningun campo puede estar vacio');
      return;
    }

    const edadNum = parseInt(age);

    if (isNaN(edadNum) || edadNum <= 0 || edadNum > 120) {
      alert('ERROR, La edad debe estar dentro de un rango de 1 a 120 años');
      return;
    }

    // NUEVA PERSONA 
    const nuevaPersona = {
      id: Date.now(), 
      name,
      city,
      country,
      address,
      age: edadNum,
      avatarURL
    };

    onAgregar(nuevaPersona); 

    
    setName('');
    setCity('');
    setCountry('');
    setAddress('');
    setAge('');
    setAvatarURL('');
  };

  return (
    <form className="person-card" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h3>Crear Nueva Persona</h3>

      <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />{' '}
      <input type="text" placeholder="Ciudad" value={city} onChange={e => setCity(e.target.value)} />{' '}
      <input type="text" placeholder="País" value={country} onChange={e => setCountry(e.target.value)} />{' '}
      <input type="text" placeholder="Dirección" value={address} onChange={e => setAddress(e.target.value)} />{' '}
      <input type="number" placeholder="Edad" value={age} onChange={e => setAge(e.target.value)} />{' '}
      <input type="text" placeholder="URL de avatar" value={avatarURL} onChange={e => setAvatarURL(e.target.value)} /><br /><br />

      <button type="submit">Agregar Persona</button>{' '}
      <button type="button" onClick={() => navigate('/')}>Volver al Inicio</button>
    </form>
  );
}

export default CrearPersona;
