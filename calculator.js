import { useState } from 'react';
const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('+');
  const calculate = (e) => {
    e.preventDefault();
    const n1 = Number(num1);
    const n2 = Number(num2);
    let res;
    if (operation === '+') {
      res = n1 + n2;
    } else if (operation === '-') {
      res = n1 - n2;
    } else if (operation === '*') {
      res = n1 * n2;
    } else if (operation === '/') {
      res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
    } else if (operation === '%') {
      res = n2 !== 0 ? n1 % n2 : 'Cannot mod by zero';
    } else {
      res = 'Please select a valid operation';
    }
    setResult(res);
  };
  return (
    <div>
      <h1>Simple Calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <input
            type="text"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (x)</option>
            <option value="/">Division (÷)</option>
            <option value="%">Modulus (%)</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {result !== null && (
        <div>
          <strong>Result: {result}</strong>
        </div>
      )}
    </div>
  );
};
export default App;