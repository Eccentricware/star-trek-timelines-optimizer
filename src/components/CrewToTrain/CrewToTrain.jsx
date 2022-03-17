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

const CrewToTrain = ({crew, rank, dimLimit}) => {
  const icons = {
    command: {
      primary: <CommandIcon color='gold'position={0}dimLimit={dimLimit}/>,
      secondary: <CommandIcon color='silver'position={0}dimLimit={dimLimit}/>,
      tertiary: <CommandIcon color='#b08d57'position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <CommandIcon color='silver' position={0} dimLimit={dimLimit}/>
    },
    diplomacy: {
      primary: <DiplomacyIcon color='gold' position={0}dimLimit={dimLimit}/>,
      secondary: <DiplomacyIcon color='silver' position={0}dimLimit={dimLimit}/>,
      tertiary: <DiplomacyIcon color='#b08d57' position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <DiplomacyIcon color='silver' position={0} dimLimit={dimLimit}/>
    },
    engineering: {
      primary: <EngineeringIcon color='gold' position={0}dimLimit={dimLimit}/>,
      secondary: <EngineeringIcon color='silver' position={0}dimLimit={dimLimit}/>,
      tertiary: <EngineeringIcon color='#b08d57' position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <EngineeringIcon color='silver' position={0} dimLimit={dimLimit}/>
    },
    medicine: {
      primary: <MedicineIcon color='gold' position={0}dimLimit={dimLimit}/>,
      secondary: <MedicineIcon color='silver' position={0}dimLimit={dimLimit}/>,
      tertiary: <MedicineIcon color='#b08d57' position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <MedicineIcon color='silver' position={0} dimLimit={dimLimit}/>
    },
    science: {
      primary: <ScienceIcon color='gold' position={0}dimLimit={dimLimit}/>,
      secondary: <ScienceIcon color='silver' position={0}dimLimit={dimLimit}/>,
      tertiary: <ScienceIcon color='#b08d57' position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <ScienceIcon color='silver' position={0} dimLimit={dimLimit}/>
    },
    security: {
      primary: <SecurityIcon color='gold' position={0}dimLimit={dimLimit}/>,
      secondary: <SecurityIcon color='silver' position={0}dimLimit={dimLimit}/>,
      tertiary: <SecurityIcon color='#b08d57' position={0}dimLimit={dimLimit}/>,
      voyageSecondary: <SecurityIcon color='silver' position={0} dimLimit={dimLimit}/>
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
      <td className="skill-icons">
        {icons[crew.skills[0]].primary}
        {crew.skills[1] ? icons[crew.skills[1]].secondary : null}
        {crew.skills[2] ? icons[crew.skills[2]].tertiary : null}
      </td>
      <td className="voyages-improved">
        {crew.voyagesImproved.map((voyagePair, i) => {
          return(
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

export default CrewToTrain;