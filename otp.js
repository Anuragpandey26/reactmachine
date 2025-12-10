import { useState } from 'react';
function App() {
  const [otp, setOtp] = useState('');
  const generateOTP = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 3; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      result += Math.floor(Math.random() * 10);
    }
    setOtp(result);
  };
  return (
    <div>
      <h1>OTP Generator</h1>
      <button onClick={generateOTP}>Generate OTP</button>
      <h2>Your OTP:{otp}</h2>
    </div>
  );
}
export default App;