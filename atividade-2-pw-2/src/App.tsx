import React, { useState } from 'react';
import { Tech } from './Tech/tech';

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

  return (
    <div>
      <input value={newTech} onChange={(e) => setNewTech(e.target.value)} />
      <button onClick={addTech}>Adicionar</button>

      {techs.map((tech) => (
        <Tech
          key={tech.id}
          tech={tech.tech}
          completed={tech.completed}
          onToggle={() => toggleTech(tech.id)}
          onRemove={() => removeTech(tech.id)}
        />
      ))}

      <p>
        {completedTechs} de {techs.length} tecnologias concluídas
      </p>
    </div>
  );
}

export default App;