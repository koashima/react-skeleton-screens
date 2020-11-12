import React from 'react';
import './SkeletonEl.css'

const SkeletonEl = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}></div>
  )
}

export default SkeletonEl;