import React from 'react';
import Skeleton from '../Skeleton';
import background from './news-bg.jpg';

function News() {
  return (
    <Skeleton
      class="news"
      backgroundSrc={background}
      backgroundAlt="texas camp news background"
      title="Submission deadline fast approaching"
      body="Submit a session"
      rightElement={
        <img src="/" alt="signup for news" />
      }
    />
  );
}

export default News;
