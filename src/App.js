import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Matulog' },
    { id: 2, task: 'Mo kaon' },
    { id: 3, task: 'Mo skwela' },
  ]);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAdd = (task) => {
    const newTodo = { id: Date.now(), task };
    setTodos([...todos, newTodo]);
  };

  const handleEdit = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
    setEditingTodo(null);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
  };

  const handleEditCancel = () => {
    setEditingTodo(null);
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Georgia, serif', backgroundColor: '#89CFF0' }}>
      <h1>To-Do List</h1>
      <AddTodo onAdd={handleAdd} />
      {editingTodo ? (
        <EditTodo todo={editingTodo} onEdit={handleEdit} onCancel={handleEditCancel} />
      ) : (
        <TodoList todos={todos} onEdit={handleEditClick} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default App;
