import React from 'react';
import Star from './Star.jsx';

// Do NOT use this component to display your ratings
// Non-Ratings and Reviews Widgets should use <StarAverageRating/> !!!

const BeholdRarityDisplay = ({currentRarity, maxRarity, beholdRarity}) => {
  return (
    <React.Fragment>
      <Star stars={currentRarity} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} />
      { maxRarity >= 2 && <Star stars={currentRarity - 1} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} />}
      { maxRarity >= 3 && <Star stars={currentRarity - 2} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} />}
      { maxRarity >= 4 && <Star stars={currentRarity - 3} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} />}
      { maxRarity >= 5 && <Star stars={currentRarity - 4} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} />}
    </React.Fragment>
  )
}

export default BeholdRarityDisplay;