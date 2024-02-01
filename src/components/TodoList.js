import React from 'react';

const TodoList = ({ todos, onEdit, onDelete }) => {
  const handleCheckboxChange = (id) => {
    console.log(`Task with ID ${id} checked/unchecked`);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            margin: '0.5rem',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '200px',
            backgroundColor: todo.completed ? '#e0e0e0' : '#fff',
          }}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
            style={{ marginRight: '0.5rem' }}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.task}</span>
          <button
            onClick={() => onEdit(todo)}
            style={{ fontFamily: 'Georgia, serif', marginLeft: '0.5rem' }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            style={{ fontFamily: 'Georgia, serif', marginLeft: '0.5rem' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
