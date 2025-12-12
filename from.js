import { useState } from 'react';
function SimpleForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const handleSubmit = (e) => {
    if (!name) {
      alert('Name is required');
      return;
    }
    if (!email) {
      alert('Email is required');
      return;
    }
    if (!gender) {
      alert('gender is required');
      return;
    }
    alert(`Submitted Successfully Name: ${name} Email: ${email} Gender: ${gender}`);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>gender: </label><br />
          <select onChange={(e)=>setGender(e.target.value)}>
            <option value="male">male</option>
            <option value='female'>female</option>
          </select>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SimpleForm;