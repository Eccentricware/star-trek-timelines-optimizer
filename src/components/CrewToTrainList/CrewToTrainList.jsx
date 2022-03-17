import React from 'react';
import CrewToTrain from '../CrewToTrain/CrewToTrain.jsx';

const CrewToTrainList = ({rankedCrewToTrain, dimLimit}) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Rarity</th>
          <th>EV</th>
          <th>Skill Pool</th>
          <th>Voyages Improved</th>
        </tr>
      </thead>
      <tbody>
        {
          rankedCrewToTrain.map((crew, i) => {
            return <CrewToTrain key={i} rank={i+1} crew={crew} dimLimit={dimLimit}/>
          })
        }
      </tbody>
    </table>
  )
}

export default CrewToTrainList;