import React from 'react';
import SkeletonEl from './SkeletonEl';

const SkeletonArticle = () => {
  return ( 
    <div class="skeleton-wrapper">
      <div class="skeleton-article">
        <SkeletonEl type="title"/>
        <SkeletonEl type="text"/>
        <SkeletonEl type="text"/>
        <SkeletonEl type="text"/>
      </div>
    </div>
  )
}


export default SkeletonArticle;