import './App.css';
import React, { useState } from 'react';
import Optimizer from '../../util/Optimizer';
import SaveImport from '../SaveImport/SaveImport.jsx';
import DataCoreCrew from '../../util/DataCoreCrew';
import ModeSelector from '../ModeSelector/ModeSelector.jsx';
import BeholdAdviser from '../BeholdAdviser/BeholdAdviser.jsx';
import CrewToTrainDisplay from '../CrewToTrainDisplay/CrewToTrainDisplay.jsx';
import CrewToCiteDisplay from '../CrewToCiteDisplay/CrewToCiteDisplay.jsx';
import ShuttleRankings from '../ShuttleRankings/ShuttleRankings.jsx';

const App = (props) => {
  const [saveData, setSaveData] = useState(Optimizer);
  const [rankedCrewToTrain, setRankedCrewToTrain] = useState([]);
  const [rankedCrewToCite, setRankedCrewToCite] = useState([]);
  const [rankedShuttleCrew, setRankedShuttleCrew] = useState({});
  const [mode, setMode] = useState('waiting');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [beholdCrew, setBeholdCrew] = useState(Optimizer.beholdCrew);
  const [dimLimit, setDimLimit] = useState(25);
  const [toggleMe, setToggleMe] = useState(false);

  function startProcessing(saveData) {
    var loadingMessages = [
      'Keep your red shirt on and watch out!',
      'Don\'t get in a twist!',
      'Hold on a second!',
      'What am I, a computer?!',
      'So many characters, so little time!'
    ];
    var message = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setLoadingMessage(message);
    setMode('loading');
    setTimeout(() => {
      importData(saveData);
    }, 0)
  }

  function importData(saveData) {
    let crewPotential = {};
    /* This can be added for dynamic functionality later. Can hard code for now
    fetch('https://datacore.app/structured/crew.json')
      .then(response => response.json)
      .then(data => crewPotential = data);
      Optimizer.crewPotential = crewPotential;
    */
    console.log(Optimizer);
    console.log("Processing Roster");
    Optimizer.assessCrewRoster(saveData, DataCoreCrew);
    console.log("Roster Processed. Starting Voyage Rankings");
    Optimizer.sortVoyageRankings();
    console.log("Crew sorted by voyage EV. Finding best current crew.");
    Optimizer.findCurrentBestCrew();
    console.log("Best Current Crew Calculated. Calculating best potential crew at current rarity");
    Optimizer.findBestForRarity();
    console.log("Best crew for rarity calculated. Comparing differences");
    Optimizer.findCrewToTrain();
    console.log("Potential EV Improvements Found");
    Optimizer.findEVContributionOfCrewToTrain();
    Optimizer.sortCrewToTrain();
    Optimizer.findBestCitedCrew();
    Optimizer.findCrewToCite();
    Optimizer.findEVContributionOfCrewToCite();
    Optimizer.sortCrewToCite();
    Optimizer.sortUntrainedShuttlers();
    console.log(Optimizer);
    console.log("Ranked Crew to Train");
    console.log(Optimizer.rankedCrewToTrain);
    console.log("Ranked Crew To Cite");
    console.log(Optimizer.rankedCrewToCite);
    setRankedCrewToTrain(Optimizer.rankedCrewToTrain);
    setRankedCrewToCite(Optimizer.rankedCrewToCite);
    setRankedShuttleCrew(Optimizer.rankedCrewForShuttles);
    setMode('citation');
  }

  const processCandidate = (slot, name) => {
    console.log(`Candidate ${slot} is ${name} and has an index of ${Optimizer.nameToIndex[name]}`);
    Optimizer.setBeholdSlot(slot, name);
    console.log(Optimizer.beholdCrew[slot]);
    Optimizer.findBeholdCrewPotential(slot);
    setBeholdCrew(Optimizer.beholdCrew);
    setMode('behold');
    setToggleMe(!toggleMe);
  }

  return (
    <div className="App">
      {mode !== 'waiting' && mode !== 'loading' ? <ModeSelector mode={mode} setMode={setMode} /> : null}
      {
        mode === 'behold'
          ?
        <BeholdAdviser processCandidate={processCandidate}
          beholdCrew={beholdCrew}
          dimLimit={dimLimit}
        />
          :
        null
      }
      {mode === 'waiting' ?
        <SaveImport label={saveData}
          importData={importData}
          startProcessing={startProcessing}
          optimizer={Optimizer}
        />
        : null
      }
      {mode === 'citation' ? <CrewToCiteDisplay rankedCrewToCite={rankedCrewToCite} dimLimit={dimLimit}/> : null}
      {mode === 'training' ? <CrewToTrainDisplay rankedCrewToTrain={rankedCrewToTrain} dimLimit={dimLimit}/> : null}
      {mode === 'shuttlery' && <ShuttleRankings rankedShuttleCrew={rankedShuttleCrew}
        dimLimit={dimLimit}/>}
      {mode === 'loading' ? <div className="loading-message">Loading: {loadingMessage}</div> : null}
      <div className="update-date">Last Game Roster Update: 4-1-2022</div>
    </div>
  );
}

export default App;
