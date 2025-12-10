import { useState } from 'react';
function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const addNote = () => {
    if (input) {
      setNotes([...notes, input]);
      setInput('');
    }
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter the note "
        />
        <button onClick={addNote}>Add</button>
      </div>
      <div>
        {notes.map((note, index) => (
          <div key={index}>{note}</div>
        ))}
      </div>
    </div>
  );
}
export default App;