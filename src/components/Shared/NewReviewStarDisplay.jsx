import React from 'react';
import NewReviewStar from './NewReviewStar.jsx';

const NewReviewStarDisplay = ({rating, hoverRating, setRating, setHoverRating}) => {
  return (
    <div>
      <NewReviewStar starNumber={1} stars={rating} hoverStars={hoverRating}
        setRating={setRating} setHoverRating={setHoverRating} starId={Math.random()}/>
      <NewReviewStar starNumber={2} stars={rating - 1} hoverStars={hoverRating - 1}
        setRating={setRating} setHoverRating={setHoverRating} starId={Math.random()}/>
      <NewReviewStar starNumber={3} stars={rating - 2} hoverStars={hoverRating - 2}
        setRating={setRating} setHoverRating={setHoverRating} starId={Math.random()}/>
      <NewReviewStar starNumber={4} stars={rating - 3} hoverStars={hoverRating - 3}
        setRating={setRating} setHoverRating={setHoverRating} starId={Math.random()}/>
      <NewReviewStar starNumber={5} stars={rating - 4} hoverStars={hoverRating - 4}
        setRating={setRating} setHoverRating={setHoverRating} starId={Math.random()}/>
    </div>
  )
}

export default NewReviewStarDisplay;