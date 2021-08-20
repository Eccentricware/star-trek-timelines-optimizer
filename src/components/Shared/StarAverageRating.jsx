import React from 'react';
import StarDisplay from './StarDisplay.jsx';

// Non-Ratings and Reviews Widgets should use this
// <StarAverageRating ratings={ratings}/>

// You willneed to do an API call to
// `/reviews/meta/${product_id from source of your choice}`
// From that response you should pass the ratings propery into the component
// The component will take care of the logic and rendering from there

const StarAverageRating = ({ratings}) => {
  var totalRatings = 0;
  var totalStars = 0;
  for (var rating in ratings) {
    totalRatings += Number(ratings[rating]);
    totalStars += Number(ratings[rating]) * Number(rating);
  }
  var rating = totalStars / totalRatings;

  return (
    <StarDisplay rating={rating}/>
  )
}

export default StarAverageRating;