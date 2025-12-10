import { useState } from 'react';
function App() {
  const [gender, setGender] = useState('');
  return (
    <div>
      <h1>Select Gender</h1>
      <div>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(e) => setGender(e.target.value)}
        /> Male
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        /> Female
      </div>
    </div>
  );
}
export default App;