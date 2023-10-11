import React from 'react';
import "./tech.css"

interface TechProps {
  tech: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function Tech({ tech, completed, onToggle, onRemove }: TechProps) {
  return (
    <div className='techsList'>
      <label>
        <input className='checkBox' type="checkbox" checked={completed} onChange={onToggle} />
        <p className={completed ? 'completed' : ''}>{tech}</p>
      </label>
      <button className='trashIcon' onClick={onRemove}>
        <img src="/trash-icon.svg" alt="Ícone de Remoção" />
      </button>
    </div>
  );
}
