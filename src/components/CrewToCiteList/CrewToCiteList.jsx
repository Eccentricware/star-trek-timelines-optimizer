import React from 'react';
import CrewToCite from '../CrewToCite/CrewToCite.jsx';

const CrewToCiteList = ({rankedCrewToCite, dimLimit}) => {
  return (
    <table>
      <thead>
        <th>Rank</th>
        <th>Name</th>
        <th>EV Total</th>
        <th>Remaining</th>
        <th>Skill Pool</th>
        <th>Voyages Improved</th>
      </thead>
      <tbody>
        {
          rankedCrewToCite.map((crew, i) => {
            return <CrewToCite key={i} rank={i + 1} crew={crew} dimLimit={dimLimit}/>
          })
        }
      </tbody>
    </table>
  )
}

export default CrewToCiteList;