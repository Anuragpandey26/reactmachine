import { useState } from "react";
function CounterApp(){
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const start = () => {
    setRunning(true);
  };
  const stop = () => {
     setRunning(false);
   };
  if (running) {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
export default CounterApp;
