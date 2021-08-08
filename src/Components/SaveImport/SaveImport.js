import React, { useState } from 'react';

const SaveImport =(props) => {
  const [saveData, setSaveData] = useState("");

  function handleClick() {
    props.importData(saveData);
  }

  return(
    <div>
      <form>
        <textarea type="text" placeholder={saveData} onChange={e => setSaveData(e.target.value)}/>
      </form>
      <button onClick={handleClick}>Import Save Data</button>
    </div>
  )
}

export default SaveImport;
