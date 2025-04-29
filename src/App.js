import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <TodoList />
    </div>
  );
}

export default App;
