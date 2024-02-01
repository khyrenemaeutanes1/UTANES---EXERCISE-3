import React, { useState } from 'react';

const EditTodo = ({ todo, onEdit, onCancel }) => {
  const [task, setTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onEdit(todo.id, task);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Update</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditTodo;