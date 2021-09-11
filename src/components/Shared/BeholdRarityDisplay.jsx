import React from 'react';
import Star from './Star.jsx';

// Do NOT use this component to display your ratings
// Non-Ratings and Reviews Widgets should use <StarAverageRating/> !!!

const BeholdRarityDisplay = ({currentRarity, maxRarity, beholdRarity, chronsInvested}) => {
  return (
    <React.Fragment>
      <Star stars={currentRarity} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} chronsInvested={chronsInvested} />
      { maxRarity >= 2 && <Star stars={currentRarity - 1} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity} chronsInvested={chronsInvested}  />}
      { maxRarity >= 3 && <Star stars={currentRarity - 2} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity}  chronsInvested={chronsInvested} />}
      { maxRarity >= 4 && <Star stars={currentRarity - 3} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity}  chronsInvested={chronsInvested} />}
      { maxRarity >= 5 && <Star stars={currentRarity - 4} starId={Math.random()} currentRarity={currentRarity} beholdRarity={beholdRarity}  chronsInvested={chronsInvested} />}
    </React.Fragment>
  )
}

export default BeholdRarityDisplay;