import React from 'react';
import CrewToTrainList from '../CrewToTrainList/CrewToTrainList.jsx';

const CrewToTrainDisplay = ({rankedCrewToTrain}) => {
  return (
    <CrewToTrainList rankedCrewToTrain={rankedCrewToTrain}/>
  )
}

export default CrewToTrainDisplay;