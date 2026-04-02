import { useState } from 'react';
import { TodoItem } from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 1. Add a new task
  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: Date.now(), // Unique ID based on time
      task: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInputValue(''); // Clear the input box
  };

  // 2. Toggle completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 3. Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>My Todo App</h1>
      
      {/* Input Area */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '5px' }}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 16px' }}>Add</button>
      </div>

      {/* List Area */}
      <div>
        {todos.length === 0 && <p style={{ color: '#888' }}>No tasks yet!</p>}
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            task={todo.task} 
            isCompleted={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;