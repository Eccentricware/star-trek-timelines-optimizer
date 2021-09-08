import React, {useState} from 'react';

const ModeSelector = ({mode, setMode}) => {
  return (
    <div>
      <div>Select Optimization Mode:</div>
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="training">Training</option>
        <option value="citation">Citation</option>
        <option value="behold">Behold</option>
      </select>
    </div>
  )
}

export default ModeSelector;