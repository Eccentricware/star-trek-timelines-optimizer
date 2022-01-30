import React from 'react';
import CommandIcon from '../Icons/CommandIcon.jsx';
import DiplomacyIcon from '../Icons/DiplomacyIcon.jsx';
import EngineeringIcon from '../Icons/EngineeringIcon.jsx';
import MedicineIcon from '../Icons/MedicineIcon.jsx';
import ScienceIcon from '../Icons/ScienceIcon.jsx';
import SecurityIcon from '../Icons/SecurityIcon.jsx';

const ShuttleRankings = ({rankedShuttleCrew}) => {
  const icons = {
    command: <CommandIcon color='gold' position={0}/>,
    diplomacy: <DiplomacyIcon color='gold' position={-6}/>,
    engineering: <EngineeringIcon color='gold' position={0}/>,
    medicine: <MedicineIcon color='gold' position={0}/>,
    science: <ScienceIcon color='gold' position={0}/>,
    security: <SecurityIcon color='gold' position={0}/>
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