// src/Counter.js
import React, { useState } from 'react';
import './counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
