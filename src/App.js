import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded shadow">
        <h1 className="text-4xl font-bold mb-6 text-center">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-grow border rounded-l px-2 py-1"
            placeholder="Enter a new todo"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-1 rounded-r"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex items-center justify-between mb-2 p-2 ${
                todo.completed ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                  className="mr-2"
                />
                <span
                  className={todo.completed ? "line-through text-gray-500" : ""}
                >
                  {todo.text}
                </span>
              </div>
              {todo.completed && (
                <button
                  onClick={() => deleteTodo(index)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete todo"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
