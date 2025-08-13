import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio">
      <h1>Bienvenido a Cinefest Manager</h1>

      <div className="botones">
        <button onClick={() => navigate('/crear')}>
          Crear Persona
        </button>
        <br/>

        <button onClick={() => navigate('/lista')}>
          Ver Lista de Personas
        </button>
      </div>
    </div>
  );
}

export default Inicio;
