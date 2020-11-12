import React from 'react';
import Shimmer from './Shimmer';
import SkeletonEl from './SkeletonEl';

const SkeletonProfile = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div class={`skeleton-wrapper ${themeClass}`}>
      <div class="skeleton-profile">
        <div>
          <SkeletonEl type="avatar" />
        </div>
        <div>
          <SkeletonEl type="title" />
          <SkeletonEl type="text" />
          <SkeletonEl type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonProfile;
