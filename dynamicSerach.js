import { useState } from 'react';
function App() {
  const [searchText, setSearchText] = useState('');
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Watermelon',
    'Kiwi',
    'Peach'
  ];
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div>
      <h1>Fruit Search</h1>      
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      /> 
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {filteredItems.length === 0 && <p>No fruits found</p>}
    </div>
  );
}

export default App;