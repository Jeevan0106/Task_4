// App.js
import React, { useState } from 'react';
import Counter from './components/counter';
import DynamicInput from './components/dynamicinput';
import ToggleButton from './components/togglebutton';
import ShowHideText from './components/showhidetext';
import './App.css';

function App() {
  const [currentTask, setCurrentTask] = useState(null);

  const renderTask = () => {
    switch (currentTask) {
      case 'counter':
        return <Counter />;
      case 'dynamicInput':
        return <DynamicInput />;
      case 'toggleButton':
        return <ToggleButton />;
      case 'showHideText':
        return <ShowHideText />;
      default:
        return <p>Please select a task to view.</p>;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Selector</h1>
      <div className="task-selector">
        <button className="task-button" onClick={() => setCurrentTask('counter')}>Task 1: Counter</button>
        <button className="task-button" onClick={() => setCurrentTask('dynamicInput')}>Task 2: Dynamic Input</button>
        <button className="task-button" onClick={() => setCurrentTask('toggleButton')}>Task 3: Toggle Button</button>
        <button className="task-button" onClick={() => setCurrentTask('showHideText')}>Task 4: Show/Hide Text</button>
      </div>
      {renderTask()}
    </div>
  );
}

export default App;
