import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  const buttonStyle = {
    fontFamily: 'Georgia, serif',
    fontSize: '1rem',
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>ADD</button>
    </form>
  );
};

export default AddTodo;
