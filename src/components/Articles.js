import React, { useEffect, useState } from 'react';
import SkeletonEl from '../skeletons/SkeletonEl';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 5000);
  });
  return (
  <div class="articles">
    <h2>ARTICLES</h2>

    <SkeletonEl type="title" />
    <SkeletonEl type="text" />
    <SkeletonEl type="thumbnail" />
    <SkeletonEl type="avatar" />
 
    {articles && articles.map(article => (
      <div class="article" key={article.id}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    ))}

    {!articles && (
      <div>
        <h1>LOADING...</h1>
      </div>
    )}

  </div>
);
};

export default Articles;
