import React, { useState } from 'react';
import { Tech } from './Tech/tech';
import "./App.css"

interface TechData {
  id: number;
  tech: string;
  completed: boolean;
}

export function App() {
  const [techs, setTechs] = useState<TechData[]>([]);
  const [newTech, setNewTech] = useState('');

  function addTech() {
    setTechs([
      ...techs,
      {
        id: Date.now(),
        tech: newTech,
        completed: false,
      },
    ]);
    setNewTech('');
  }

  function toggleTech(id: number) {
    setTechs(
      techs.map((tech) =>
        tech.id === id ? { ...tech, completed: !tech.completed } : tech
      )
    );
  }

  function removeTech(id: number) {
    setTechs(techs.filter((tech) => tech.id !== id));
  }

  const completedTechs = techs.filter((tech) => tech.completed).length;

  if(techs.length == 0) {
    return (
      <div className='mainDiv'>
        <div className='header'>
          <h1>Minha Lista de Tecnologias</h1>
        </div>
        
        <div className='inputDiv'>
          <input placeholder='Adicione uma nova tecnologia' value={newTech} onChange={(e) => setNewTech(e.target.value)} />
          <button className='addButton' onClick={addTech}>
            Criar
            <img src="/plus-icon.svg" alt="Ícone de Adicionar" />
          </button>
        </div>
  
        <div className='techsCounters'>
          <p>Tecnologias criadas: <span>{techs.length}</span></p>
          <p>Concluídas: <span>{completedTechs} de {techs.length}</span></p>
        </div>

        <div className='divSemTechs'>
          <span>Você ainda não tem tecnologias cadastradas</span>
          <p>Crie tecnologia e organize seus itens a fazer</p>
        </div>
        
      </div>
    );    
  }
  else {
    return (
      <div className='mainDiv'>
        <div className='header'>
          <h1>Minha Lista de Tecnologias</h1>
        </div>
        
        <div className='inputDiv'>
          <input placeholder='Adicione uma nova tecnologia' value={newTech} onChange={(e) => setNewTech(e.target.value)} />
          <button className='addButton' onClick={addTech}>
            Criar
            <img src="/plus-icon.svg" alt="Ícone de Adicionar" />
          </button>
        </div>
  
        <div className='techsCounters'>
          <p>Tecnologias criadas: <span>{techs.length}</span></p>
          <p>Concluídas: <span>{completedTechs} de {techs.length}</span></p>
        </div>
  
        {techs.map((tech) => (
          <Tech
            key={tech.id}
            tech={tech.tech}
            completed={tech.completed}
            onToggle={() => toggleTech(tech.id)}
            onRemove={() => removeTech(tech.id)}
          />
        ))}
        
      </div>
    );    
  }

}

export default App;