import { useState } from "react";

function TodoApp(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos([...todos, { text: trimmed, completed: false }]);
    setInput("");
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); 
    setTodos(updatedTodos);
  };
  const handleToggle=(index)=>{
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      completed:!updatedTodos[index].completed
    };
    setTodos(updatedTodos);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
        {todos.length === 0 && (
          <li>No todos yet. Add one above!</li>
        )}
      </ul>
    </div>
  );
}

export default TodoApp;