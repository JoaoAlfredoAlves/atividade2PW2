import React from 'react';

interface TechProps {
  tech: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function Tech({ tech, completed, onToggle, onRemove }: TechProps) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        {tech}
      </label>
      <button onClick={onRemove}>Remover</button>
    </div>
  );
}
