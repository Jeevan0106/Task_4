// ToggleButton.js
import React, { useState } from 'react';
import './togglebutton.css'

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="toggle-container">
      <h2>Toggle Button</h2>
      <button
        className={`toggle-button ${isOn ? '' : 'off'}`}
        onClick={toggleSwitch}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;
