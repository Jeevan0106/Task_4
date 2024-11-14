// DynamicInput.js
import React, { useState } from 'react';
import './dynamicinput.css';

function DynamicInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div className="input-container">
      <h2>Dynamic Input Field</h2>
      <input
        className="input-box"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className="current-input">Current Input: {inputValue}</p>
    </div>
  );
}

export default DynamicInput;
