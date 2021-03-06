import React from 'react';

const DiplomacyIcon = ({ color, position, dimLimit }) => {
  const dimBalancer = dimLimit;
  // height={dimBalancer * 0.943}
  return (
    <svg width={dimBalancer} height={dimBalancer} viewBox="0 0 101.04 95.24" transform={`translate(${position} 0)`}>
      <path d="M28.39,80.65c-8.42,0-18.86-6.5-23.68-16.77,3.38.32,10.92,2.81,13.17,4.33-.48-1.84-.68-7.68.56-9.29C23.41,62.45,28.39,65.24,28.39,80.65Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M50,89.85c-.73,0-6.71-.48-16.66,7.15l-2.57-1.93s5.86-5.14,8.91-5.22C29,90.38,21.44,86.4,17.11,82.76c2.79,0,14.94-.57,16.37.8C33,81.91,33,75.69,33.48,71c9.74,5.32,9.47,13.07,9,16.57A22.2,22.2,0,0,1,50,86.33" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M9.26,48.17C10.93,47,14,42,14.77,40.4c6.31,13.74.61,20.3-2.76,23.07C10.11,62,.52,56.56,0,37.46,4.4,38.8,8.48,46.48,9.26,48.17Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M21.48,22.83a20.13,20.13,0,0,0-8,4.5,32.51,32.51,0,0,0-1.4-12.41C6.35,20.12,5.73,37,6.89,40.68,12.48,39.67,21.17,33.23,21.48,22.83Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M32.44,3c-2.71.52-5.87,1.91-9.1,6.54a7,7,0,0,0,.07-3.9c-3.23,1.18-8.51,4.19-7.27,13.29C24.29,16.44,31.41,11.44,32.44,3Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" /><path d="M71.61,80.65c8.42,0,18.86-6.5,23.68-16.77-3.38.32-10.92,2.81-13.17,4.33.48-1.84.68-7.68-.56-9.29C76.59,62.45,71.61,65.24,71.61,80.65Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M50,89.85c.73,0,6.71-.48,16.66,7.15l2.57-1.93s-5.86-5.14-8.91-5.22c10.69.53,18.24-3.45,22.57-7.09-2.79,0-14.94-.57-16.37.8.51-1.65.45-7.87,0-12.54-9.74,5.32-9.47,13.07-9,16.57A22.2,22.2,0,0,0,50,86.33" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M90.74,48.17C89.07,47,86.05,42,85.23,40.4,78.92,54.14,84.62,60.7,88,63.47c1.9-1.47,11.49-6.91,12-26C95.6,38.8,91.52,46.48,90.74,48.17Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M78.52,22.83a20.13,20.13,0,0,1,8,4.5,32.51,32.51,0,0,1,1.4-12.41c5.74,5.2,6.36,22.11,5.2,25.76C87.52,39.67,78.83,33.23,78.52,22.83Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
      <path d="M67.56,3c2.71.52,5.87,1.91,9.1,6.54a7,7,0,0,1-.07-3.9c3.23,1.18,8.51,4.19,7.27,13.29C75.71,16.44,68.59,11.44,67.56,3Z" transform="translate(0.52 -2.38)" fill={color} stroke="#000" />
    </svg>
  )
}

export default DiplomacyIcon;