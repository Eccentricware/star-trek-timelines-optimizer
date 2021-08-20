import React, { useState } from 'react';

const SaveImport =(props) => {
  const [saveData, setSaveData] = useState("");

  function handleClick() {
    props.importData(saveData);
  }

  return(
    <div>
      <form>
        <textarea className="import-text" type="text" placeholder={saveData} onChange={e => setSaveData(e.target.value)}/>
      </form>
      <button onClick={handleClick}>Import Save Data</button>
      <div>Just copy-paste your save file into the field like you would on DataCore.</div>
      <div>Scroll to the bottom where you can find your ranked crew to train and cite!</div>
      <div>Game roster will be constantly synced after migration to <a href='https://datacore.app/' className="link">DataCore!</a></div>
      <div>There are tons of other resources there in the meantime, check it out!</div>
      <div>---</div>
      <div>Last Game Roster Update: 8-8-2021</div>
    </div>
  )
}

export default SaveImport;
