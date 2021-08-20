import './App.css';
import React, { useState } from 'react';
import Optimizer from '../../util/Optimizer';
import SaveImport from '../SaveImport/SaveImport.jsx';
import CrewToTrainDisplay from '../CrewToTrainDisplay/CrewToTrainDisplay.jsx';
import DataCoreCrew from '../../util/DataCoreCrew';

function App() {
  const [saveData, setSaveData] = useState(Optimizer);
  const [rankedCrewToTrain, setRankedCrewToTrain] = useState([]);
  const [rankedCrewToCite, setRankedCrewToCite] = useState([]);

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
    console.log(Optimizer);
    console.log("Ranked Crew to Train");
    console.log(Optimizer.rankedCrewToTrain);
    console.log("Ranked Crew To Cite");
    console.log(Optimizer.rankedCrewToCite);
    setRankedCrewToTrain(Optimizer.rankedCrewToTrain);
    setRankedCrewToCite(Optimizer.rankedCrewToCite);
  }

  return (
    <div className="App">
      {rankedCrewToTrain.length === 0 ? <SaveImport label={saveData} importData={importData} optimizer={Optimizer} /> : null}
      {rankedCrewToTrain.length > 0 ? <CrewToTrainDisplay rankedCrewToTrain={rankedCrewToTrain}/> : null}

    </div>
  );
}

export default App;
