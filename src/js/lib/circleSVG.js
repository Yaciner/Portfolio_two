import React from 'react';

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <circle className="circlesvg_circle" cx='24' cy='24' r='24' strokeDasharray='1000' strokeDashoffset='1000' />
  </svg>
);

export default SVG;


// <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 80 80" xml:space="preserve">
//   <polygon class="ring offset-colour" points="32.5,52 47.5,40 32.5,28" />
//   <circle cx="40" cy="40" r="36" fill="transparent" stroke="black" stroke-width="2" />
//   <circle transform="rotate(-90 40 40)" class="another-circle" cx="40" cy="40" r="36" fill="transparent" stroke="black" stroke-width="4" />
// </svg>
