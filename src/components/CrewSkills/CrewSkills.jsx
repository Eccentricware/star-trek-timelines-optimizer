import React from 'react';

const CrewSkills = ({skills}) => {
  return (
    <React.Fragment>
      {
        skills.map(skill => {
          return <img src={`src/images/icon_command_skill.png`}/>

        })
      }
    </React.Fragment>
  )
}

export default CrewSkills;