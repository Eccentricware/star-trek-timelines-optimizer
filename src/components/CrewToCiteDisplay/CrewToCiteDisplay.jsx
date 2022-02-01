import React from 'react';
import CrewToCiteList from '../CrewToCiteList/CrewToCiteList.jsx';

const CrewToCiteDisplay = ({rankedCrewToCite}) => {
  return (
    <CrewToCiteList rankedCrewToCite={rankedCrewToCite}/>
  )
}

export default CrewToCiteDisplay;