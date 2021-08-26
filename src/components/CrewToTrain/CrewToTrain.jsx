import React from 'react';
import './CrewToTrain.css';
import RarityDisplay from '../Shared/RarityDisplay.jsx';
import CrewSkills from '../CrewSkills/CrewSkills.jsx';
import CommandIcon from '../Icons/CommandIcon.jsx';
import DiplomacyIcon from '../Icons/DiplomacyIcon.jsx';
import EngineeringIcon from '../Icons/EngineeringIcon.jsx';
import MedicineIcon from '../Icons/MedicineIcon.jsx';
import ScienceIcon from '../Icons/ScienceIcon.jsx';
import SecurityIcon from '../Icons/SecurityIcon.jsx';

const CrewToTrain = ({crew, rank}) => {
  const icons = {
    command: {
      primary: <CommandIcon color='gold'/>,
      secondary: <CommandIcon color='silver'/>,
      tertiary: <CommandIcon color='#b08d57'/>
    },
    diplomacy: {
      primary: <DiplomacyIcon color='gold' />,
      secondary: <DiplomacyIcon color='silver' />,
      tertiary: <DiplomacyIcon color='#b08d57' />
    },
    engineering: {
      primary: <EngineeringIcon color='gold' />,
      secondary: <EngineeringIcon color='silver' />,
      tertiary: <EngineeringIcon color='#b08d57' />
    },
    medicine: {
      primary: <MedicineIcon color='gold' />,
      secondary: <MedicineIcon color='silver' />,
      tertiary: <MedicineIcon color='#b08d57' />
    },
    science: {
      primary: <ScienceIcon color='gold' />,
      secondary: <ScienceIcon color='silver' />,
      tertiary: <ScienceIcon color='#b08d57' />
    },
    security: {
      primary: <SecurityIcon color='gold' position={2} />,
      secondary: <SecurityIcon color='silver' position={2} />,
      tertiary: <SecurityIcon color='#b08d57' position={2} />
    },
  }
  return (
    <tr>
      <td>{rank}</td>
      <td className="crew-name">{crew.name}</td>
      <td className="rarity-display"><RarityDisplay currentRarity={crew.currentRarity}
        maxRarity={crew.maxRarity}/>
      </td>
      <td>{Math.ceil(crew.addedEV)}</td>
      <td>
        {icons[crew.skills[0]].primary}
        {crew.skills[1] ? icons[crew.skills[1]].secondary : null}
        {crew.skills[2] ? icons[crew.skills[2]].tertiary : null}
      </td>
      <td className="voyages-improved">
        {crew.voyagesImproved.join(', ')}
      </td>
    </tr>
  )
};

export default CrewToTrain;