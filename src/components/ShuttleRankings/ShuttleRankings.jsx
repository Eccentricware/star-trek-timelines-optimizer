import React from 'react';
import CommandIcon from '../Icons/CommandIcon.jsx';
import DiplomacyIcon from '../Icons/DiplomacyIcon.jsx';
import EngineeringIcon from '../Icons/EngineeringIcon.jsx';
import MedicineIcon from '../Icons/MedicineIcon.jsx';
import ScienceIcon from '../Icons/ScienceIcon.jsx';
import SecurityIcon from '../Icons/SecurityIcon.jsx';

const ShuttleRankings = ({rankedShuttleCrew, dimLimit}) => {
  const icons = {
    command: <CommandIcon color='gold' position={0} dimLimit={dimLimit}/>,
    diplomacy: <DiplomacyIcon color='gold' position={0} dimLimit={dimLimit}/>,
    engineering: <EngineeringIcon color='gold' position={0} dimLimit={dimLimit}/>,
    medicine: <MedicineIcon color='gold' position={0} dimLimit={dimLimit}/>,
    science: <ScienceIcon color='gold' position={0} dimLimit={dimLimit}/>,
    security: <SecurityIcon color='gold' position={0} dimLimit={dimLimit}/>
  }

  return (
      <div className="shuttle-tables">
      {
        rankedShuttleCrew.map(skill => {
          let skillIcons = skill.signature.split('/');
          skillIcons.forEach((skill, index) => {
            skillIcons[index] = icons[skill.slice(0, skill.indexOf('_'))];
          });
          console.log('Identified skills in jsx:', skillIcons);
          return (
            <div key={skill.signature} className="shuttle-table">
                <div>
                  {
                    skillIcons.map(icon => {
                      return icon
                    })
                  }
                </div>
              {
                skill.crew.map((crew, index) => (
                  <React.Fragment>
                    <div key={index} className="shuttle-row">
                      <div className="shuttle-row-name">{crew.name}</div>
                      <div>{crew.shuttleRanks[skill.signature]}</div>
                    </div>
                  </React.Fragment>
                ))
              }
            </div>
          )
        })
      }
      </div>
  )
}

export default ShuttleRankings;