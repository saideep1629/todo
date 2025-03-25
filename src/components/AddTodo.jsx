import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo/todoSlice.js';

function AddTodo() {
  // State to manage the input text
  const [input, setInput] = useState('');
  
  // State to manage the priority
  const [priority, setPriority] = useState('Medium');
  
  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to add a new todo
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!input.trim()) return; // Prevent adding empty todos
    
    dispatch(addTodo({ text: input, priority })); // Dispatch action
    
    setInput(''); // Reset input
    setPriority('Medium'); // Reset priority
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500">
      {/* Form to add todo */}
      <form onSubmit={addTodoHandler} className="bg-gray-900 p-30 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        {/* Input field */}
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out w-64"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        {/* Priority selection */}
        <select
          className="bg-gray-800 text-gray-100 border border-gray-700 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-900 w-64"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
        {/* Submit button */}
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-64"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
