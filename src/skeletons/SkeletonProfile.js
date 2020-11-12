import React from 'react';
import SkeletonEl from './SkeletonEl';

const SkeletonProfile = () => {
  return (
    <div class="skeleton-wrapper">
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
    </div>
  );
};

export default SkeletonProfile;
