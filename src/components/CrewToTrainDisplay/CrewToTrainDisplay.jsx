import React from 'react';
import CrewToTrainList from '../CrewToTrainList/CrewToTrainList.jsx';

const CrewToTrainDisplay = ({rankedCrewToTrain, dimLimit}) => {
  return (
    <CrewToTrainList rankedCrewToTrain={rankedCrewToTrain} dimLimit={dimLimit}/>
  )
}

export default CrewToTrainDisplay;