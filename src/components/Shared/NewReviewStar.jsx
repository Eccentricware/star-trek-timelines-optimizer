import React from 'react';

// Do NOT use this component to display your ratings
// Non-Ratings and Reviews Widgets should use <StarAverageRating/> !!!

function NewReviewStar(props) {
  var degToRad = (deg) => {
    return deg * 0.0174533;
  }
  var radius = 10;
  var strokeWidth = 0.5;
  var findStarPoints = (r) => {
    var pointAngles = [];
    for (var angleNum = 0; angleNum < 12; angleNum++) {
      pointAngles.push(90 + angleNum * 36);
    }
    pointAngles.forEach((angle, i) => {
      if (i % 2 === 0) {
        points.push([(Math.cos(degToRad(angle)) * -r) + r + strokeWidth, (Math.sin(degToRad(angle)) * -r) + r + strokeWidth]);
      } else if (i % 2 !== 0) {
        points.push([(Math.cos(degToRad(angle)) * -r * 1.91 / 5) + r + strokeWidth, (Math.sin(degToRad(angle)) * -r * 1.91 / 5) + r + strokeWidth]);
      }
    });
  };
  var points = [];
  findStarPoints(radius);

  var ratingRounding = Math.floor(props.stars / .25) / 4;
  var starFill = 1;
  if (ratingRounding >= 1) {
    starFill = 1;
  } else if (ratingRounding >= .75) {
    starFill = .65;
  } else if (ratingRounding >= .5) {
    starFill = .5;
  } else if (ratingRounding >= .25) {
    starFill = .35;
  } else {
    starFill = 0;
  }

  return (
    <svg viewBox={`0 0 ${2 * (radius + strokeWidth)} ${2 * (radius + strokeWidth)}`}
      width={2 * (radius + strokeWidth)} height={2 * (radius + strokeWidth)} className="rating-star"
      onMouseEnter={() => {
        props.setHoverRating(props.starNumber);
      }}
      onMouseLeave={() => {
        props.setHoverRating(0);
      }}
      onClick={() => {
        props.setRating(props.starNumber);
      }}
      >


      <clipPath id={`clip-${props.starId}`}>
        <path d={`M
            ${2 * (radius + strokeWidth)} 0
            ${2 * (radius + strokeWidth)} ${2 * (radius + strokeWidth)}
            ${2 * (radius + strokeWidth) * starFill} ${2 * (radius + strokeWidth)}
            ${2 * (radius + strokeWidth) * starFill} 0
          `}
        />
      </clipPath>

      <path id={`${props.starId}`} d={`
        M ${points[0][0]} ${points[0][1]}
        ${points[1][0]} ${points[1][1]}
        ${points[2][0]} ${points[2][1]}
        ${points[3][0]} ${points[3][1]}
        ${points[4][0]} ${points[4][1]}
        ${points[5][0]} ${points[5][1]}
        ${points[6][0]} ${points[6][1]}
        ${points[7][0]} ${points[7][1]}
        ${points[8][0]} ${points[8][1]}
        ${points[9][0]} ${points[9][1]}
        ${points[10][0]} ${points[10][1]}
        ${points[11][0]} ${points[11][1]}
        `} stroke="black" strokeWidth={strokeWidth}
        fill="lightgrey"
      />

      {
        props.hoverStars > 0
          ?
        <path d={`
          M ${points[0][0]} ${points[0][1]}
          ${points[1][0]} ${points[1][1]}
          ${points[2][0]} ${points[2][1]}
          ${points[3][0]} ${points[3][1]}
          ${points[4][0]} ${points[4][1]}
          ${points[5][0]} ${points[5][1]}
          ${points[6][0]} ${points[6][1]}
          ${points[7][0]} ${points[7][1]}
          ${points[8][0]} ${points[8][1]}
          ${points[9][0]} ${points[9][1]}
          ${points[10][0]} ${points[10][1]}
          ${points[11][0]} ${points[11][1]}
          `} fill="green"
          stroke="black" strokeWidth={strokeWidth *5}
        />
          :
        null
      }

      <path d={`
        M ${points[0][0]} ${points[0][1]}
        ${points[1][0]} ${points[1][1]}
        ${points[2][0]} ${points[2][1]}
        ${points[3][0]} ${points[3][1]}
        ${points[4][0]} ${points[4][1]}
        ${points[5][0]} ${points[5][1]}
        ${points[6][0]} ${points[6][1]}
        ${points[7][0]} ${points[7][1]}
        ${points[8][0]} ${points[8][1]}
        ${points[9][0]} ${points[9][1]}
        ${points[10][0]} ${points[10][1]}
        ${points[11][0]} ${points[11][1]}
        `} fill="green"
        stroke="black" strokeWidth={strokeWidth}
      />

      <use clipPath={`url(#clip-${props.starId})`} href={`#${props.starId}`} />
    </svg>
  )
}

export default NewReviewStar;