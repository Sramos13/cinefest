import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes personalizados
import Inicio from './Componentes/Inicio';
import CrearPersona from './Componentes/CrearPersona';
import PersonCardList from './Componentes/PersonCardList';
import AgeUpdater from './Componentes/AgeUpdater';

// Datos iniciales
import { personListData } from './personListData';

// Estilos globales
import './App.css';

function App() {
  // Estado global de personas
  const [persons, setPersons] = useState(personListData);

  // Persona actualmente seleccionada
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Función para seleccionar persona (al hacer clic en "Select")
  const handleSelectPerson = (personId) => {
    const person = persons.find(p => p.id === personId);
    setSelectedPerson(person);
  };

  // Función para aumentar edad de la persona seleccionada
  const handleIncreaseAge = () => {
    if (!selectedPerson) return;

    const updatedPersons = persons.map(p =>
      p.id === selectedPerson.id ? { ...p, age: p.age + 1 } : p
    );

    setPersons(updatedPersons);
    setSelectedPerson(prev => ({ ...prev, age: prev.age + 1 }));
  };

  // Agregar una nueva persona al estado global
  const handleAgregarPersona = (nuevaPersona) => {
    setPersons(prev => [...prev, nuevaPersona]);
  };

  // Eliminar persona por ID
  const handleEliminarPersona = (id) => {
    setPersons(prev => prev.filter(p => p.id !== id));

    // Si la eliminada era la seleccionada, borramos selección
    if (selectedPerson && selectedPerson.id === id) {
      setSelectedPerson(null);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Ruta de inicio con botones */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta para crear una nueva persona */}
          <Route
            path="/crear"
            element={<CrearPersona onAgregar={handleAgregarPersona} />}
          />

          {/* Ruta para ver la lista y la persona seleccionada */}
          <Route
            path="/lista"
            element={
              <>
                <PersonCardList
                  persons={persons}
                  onSelect={handleSelectPerson}
                  onDelete={handleEliminarPersona}
                />
                <AgeUpdater
                  person={selectedPerson}
                  onIncreaseAge={handleIncreaseAge}
                />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
