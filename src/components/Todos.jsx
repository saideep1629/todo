import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todo/todoSlice.js";

function Todos() {
  // Retrieve todos from Redux store, defaulting to an empty array if undefined
  const todos = useSelector((state) => state.todo.todos) || []; 
  const dispatch = useDispatch();
  
  // State to manage input values for updating todos
  const [inputs, setInputs] = useState({});

  // Function to handle updating a todo item
  const handleUpdateTodo = (e, id) => {
    e.preventDefault();
    if (inputs[id]) {
      dispatch(updateTodo({ id, text: inputs[id] })); // Dispatch action to update todo
      setInputs((prev) => ({ ...prev, [id]: "" })); // Clear input field after update
    }
  };

  return (
    <div className="bg-gray-500 min-h-screen">
      <div className="flex flex-col items-center px-4">
        <h2 className="text-white text-2xl mb-4">Todos</h2>
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-700 min-w-[600px]">
            <thead>
              <tr className="bg-zinc-800 text-white">
                <th className="border border-gray-700 px-4 py-2">Todo</th>
                <th className="border border-gray-700 px-4 py-2">Priority</th>
                <th className="border border-gray-700 px-4 py-2">Update</th>
                <th className="border border-gray-700 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos
                .slice()
                .sort((a, b) => {
                  // Define priority order for sorting
                  const priorityOrder = { High: 0, Medium: 1, Low: 2 };
                  return (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3);
                })
                .map((todo) => (
                  <tr key={todo.id} className="bg-zinc-900 text-white">
                    <td className="border border-gray-700 px-4 py-2 text-center break-words">
                      {todo.text}
                    </td>
                    <td className="border border-gray-700 px-4 py-2 text-center text-gray-400">
                      [{todo.priority}]
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      <input
                        type="text"
                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Update todo..."
                        value={inputs[todo.id] || ""}
                        onChange={(e) =>
                          setInputs((prev) => ({ ...prev, [todo.id]: e.target.value }))
                        }
                      />
                    </td>
                    <td className="border border-gray-700 px-4 py-2 text-center flex flex-col md:flex-row justify-center items-center gap-2">
                      <button
                        onClick={(e) => handleUpdateTodo(e, todo.id)}
                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-sm w-full md:w-auto"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodo(todo.id))} // Dispatch action to delete todo
                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-sm w-full md:w-auto"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Todos;
