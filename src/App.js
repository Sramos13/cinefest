import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './Componentes/Inicio';
import CrearPersona from './Componentes/CrearPersona';
import PersonCardList from './Componentes/PersonCardList';
import AgeUpdater from './Componentes/AgeUpdater';


import { personListData } from './personListData';


import './App.css';

function App() {
  
  const [persons, setPersons] = useState(personListData);

  
  const [selectedPerson, setSelectedPerson] = useState(null);

  
  const handleSelectPerson = (personId) => {
    const person = persons.find(p => p.id === personId);
    setSelectedPerson(person);
  };

  // aumentar la edad *(al seleccionar)
  const handleIncreaseAge = () => {
    if (!selectedPerson) return;

    const updatedPersons = persons.map(p =>
      p.id === selectedPerson.id ? { ...p, age: p.age + 1 } : p
    );

    setPersons(updatedPersons);
    setSelectedPerson(prev => ({ ...prev, age: prev.age + 1 }));
  };


  const handleAgregarPersona = (nuevaPersona) => {
    setPersons(prev => [...prev, nuevaPersona]);
  };

  
  const handleEliminarPersona = (id) => {
    setPersons(prev => prev.filter(p => p.id !== id));

    
    if (selectedPerson && selectedPerson.id === id) {
      setSelectedPerson(null);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
    
          <Route path="/" element={<Inicio />} />
          <Route
            path="/crear"
            element={<CrearPersona onAgregar={handleAgregarPersona} />}
          />
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
