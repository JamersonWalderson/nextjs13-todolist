"use client";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-lg flex-column ">
        <h1>Todo list</h1>
        <form onSubmit={handleSubmit} className="flex-column">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new todo"
            className="text-red-500"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          {todos.map((item) => (
            <div key={item.id} className="flex flex-row gap-5 ">
              <p>{item.text}</p>
              <button className="bg-red" onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
              <button
                className="bg-blue-800"
                onClick={() => updateTodo(item.id, "New Text")}
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
