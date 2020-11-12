import React from 'react';
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
    </div>
  );
};

export default SkeletonArticle;
