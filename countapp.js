import { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const increment = () => {
    const nextClicks = clicks + 1;       // increase click count
    setCount(count + nextClicks);        // add to count
    setClicks(nextClicks);               // update clicks
  };
  const decrement = () => {
    if (count === 0) return;             // do nothing if count is 0
    const nextClicks = clicks + 1;       // increase click count
    const newCount = count - nextClicks; // subtract from count
    setCount(newCount < 0 ? 0 : newCount); // prevent negative
    setClicks(nextClicks);               // update clicks
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}
export default CounterApp;
