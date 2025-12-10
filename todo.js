import { useState } from "react";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const handleAdd = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };
  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
