import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0'
      }}
    >
      <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer', flex: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
