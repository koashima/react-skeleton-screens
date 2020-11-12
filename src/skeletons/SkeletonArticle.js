import React from 'react';
import Shimmer from './Shimmer';
import SkeletonEl from './SkeletonEl';

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div class={`skeleton-wrapper ${themeClass}`}>
      <div class="skeleton-article">
        <SkeletonEl type="title" />
        <SkeletonEl type="text" />
        <SkeletonEl type="text" />
        <SkeletonEl type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
