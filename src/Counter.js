import React, { useState } from 'react';
import './Counter.css'; // Custom CSS for additional styling if needed

const Counter = () => {
  // Initialize the counter state
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container ">
      <h2 className='mt-5'>Counter Value: {count}</h2>
      <div className="button-container">
        <button className="btn btn-primary" onClick={increment}>Increment</button>
        <button className="btn btn-danger" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
