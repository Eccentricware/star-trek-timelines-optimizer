import React from 'react';
import CrewToCiteList from '../CrewToCiteList/CrewToCiteList.jsx';

const CrewToCiteDisplay = ({rankedCrewToCite, dimLimit}) => {
  return (
    <CrewToCiteList rankedCrewToCite={rankedCrewToCite} dimLimit={dimLimit}/>
  )
}

export default CrewToCiteDisplay;