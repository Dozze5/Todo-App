import React, { useState } from 'react';
import './App.css';
function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className='container'>
            <div className='Todo'>
            <h1>Todo App</h1>
            <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={e => e.key === "Enter" ? handleAddTodo() : null} />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <div className='text-container'>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(index)} />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        </div>
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default App;


