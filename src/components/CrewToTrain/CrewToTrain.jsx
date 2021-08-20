import React from 'react';
import './CrewToTrain.css';
import RarityDisplay from '../Shared/RarityDisplay.jsx';
import CrewSkills from '../CrewSkills/CrewSkills.jsx';

const CrewToTrain = ({crew, rank}) => {
  return (
    <tr>
      <td>{rank}</td>
      <td className="crew-name">{crew.name}</td>
      <td className="rarity-display"><RarityDisplay currentRarity={crew.currentRarity}
        maxRarity={crew.maxRarity}/>
      </td>
      <td>{Math.ceil(crew.addedEV)}</td>
      <td>{crew.skills.join(', ')}</td>
      <td className="voyages-improved">{crew.voyagesImproved.join(', ')}</td>
    </tr>
  )
};

export default CrewToTrain;