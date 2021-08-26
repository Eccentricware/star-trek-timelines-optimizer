import React from 'react';


const CrewSkills = ({skills}) => {
  const colors = ['gold', 'silver', 'rgb(205, 127, 50)'];
  const fill='gold';
  const icons = {
    command: {
      viewBox: "0 0 67.58 101.25",
      shape: <polygon points="66.05 70.59 44.51 66.24 33.79 0.08 23.07 66.24 1.52 70.59 19.8 79.73 17.66 99.98 33.79 84.96 49.92 99.98 47.77 79.73 66.05 70.59" fill={fill} stroke="#000" />
    },

  };

  return (
    <React.Fragment>
      {
        skills.map(skill => {
          return (
            <svg id="Layer_1" data-name="Layer 1" width="21" height="21" viewBox="0 0 67.58 101.25">
                {icons.command}
            </svg>
          )
        })
      }
    </React.Fragment>
  )
}

export default CrewSkills;