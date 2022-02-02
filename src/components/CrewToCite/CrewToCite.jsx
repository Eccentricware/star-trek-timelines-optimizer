import React from 'react';
import './CrewToCite.css';
import RarityDisplay from '../Shared/RarityDisplay.jsx';
import CrewSkills from '../CrewSkills/CrewSkills.jsx';
import CommandIcon from '../Icons/CommandIcon.jsx';
import DiplomacyIcon from '../Icons/DiplomacyIcon.jsx';
import EngineeringIcon from '../Icons/EngineeringIcon.jsx';
import MedicineIcon from '../Icons/MedicineIcon.jsx';
import ScienceIcon from '../Icons/ScienceIcon.jsx';
import SecurityIcon from '../Icons/SecurityIcon.jsx';

const CrewToCite = ({ crew, rank }) => {
  const icons = {
    command: {
      primary: <CommandIcon color='gold' position={0} />,
      secondary: <CommandIcon color='silver' position={6} />,
      tertiary: <CommandIcon color='#b08d57' position={6} />,
      voyageSecondary: <CommandIcon color='silver' position={22} />
    },
    diplomacy: {
      primary: <DiplomacyIcon color='gold' position={-6} />,
      secondary: <DiplomacyIcon color='silver' position={0} />,
      tertiary: <DiplomacyIcon color='#b08d57' position={-6} />,
      voyageSecondary: <DiplomacyIcon color='silver' position={10} />
    },
    engineering: {
      primary: <EngineeringIcon color='gold' position={0} />,
      secondary: <EngineeringIcon color='silver' position={0} />,
      tertiary: <EngineeringIcon color='#b08d57' position={0} />,
      voyageSecondary: <EngineeringIcon color='silver' position={24} />
    },
    medicine: {
      primary: <MedicineIcon color='gold' position={0} />,
      secondary: <MedicineIcon color='silver' position={0} />,
      tertiary: <MedicineIcon color='#b08d57' position={0} />,
      voyageSecondary: <MedicineIcon color='silver' position={24} />
    },
    science: {
      primary: <ScienceIcon color='gold' position={0} />,
      secondary: <ScienceIcon color='silver' position={0} />,
      tertiary: <ScienceIcon color='#b08d57' position={8} />,
      voyageSecondary: <ScienceIcon color='silver' position={24} />
    },
    security: {
      primary: <SecurityIcon color='gold' position={0} />,
      secondary: <SecurityIcon color='silver' position={0} />,
      tertiary: <SecurityIcon color='#b08d57' position={0} />,
      voyageSecondary: <SecurityIcon color='silver' position={24} />
    },
  }
  return (
    <tr>
      <td>{rank}</td>
      <td className="crew-name">{crew.name}</td>
      <td>{Math.ceil(crew.totalEVContribution)}</td>
      <td>{Math.ceil(crew.totalEVRemaining)}</td>
      <td className="skill-icons">
        {icons[crew.skills[0]].primary}
        {crew.skills[1] ? icons[crew.skills[1]].secondary : null}
        {crew.skills[2] ? icons[crew.skills[2]].tertiary : null}
      </td>
      <td className="voyages-improved">
        {crew.voyagesImproved.map((voyagePair, i) => {
          return (
            <svg width="50" height="22" viewBox="0 0 50 22" padding="0" key={i}>
              {icons[voyagePair.split('/')[1]].voyageSecondary}
              {icons[voyagePair.split('/')[0]].primary}
            </svg>
          )
        })}
      </td>
    </tr>
  )
};

export default CrewToCite;