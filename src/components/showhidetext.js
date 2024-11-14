// ShowHideText.js
import React, { useState } from 'react';
import './showhidetext.css';

function ShowHideText() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => setIsTextVisible(!isTextVisible);

  return (
    <div className="show-hide-container">
      <h2>Show/Hide Text</h2>
      <button className="show-hide-button" onClick={toggleTextVisibility}>
        {isTextVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isTextVisible && <p className="hidden-text">DISCIPLINE = SUCCESS</p>}
    </div>
  );
}

export default ShowHideText;
