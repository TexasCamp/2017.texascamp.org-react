import React from 'react';
import Skeleton from '../Skeleton';
import background from './news-bg.jpg';
import backgroundParallax from '../snow.jpg';

function News() {
  return (
    <Skeleton
      class="news"
      backgroundSrc={background}
      backgroundAlt="texas camp news background"
      backgroundSrcParallax={backgroundParallax}
      backgroundAltParallax="texas camp parallax background"
      title="SUBMISSION DEADLINE FAST APPROACHING"
      body="Submit a session"
      rightElement={
        <img src="/" alt="signup for news" />
      }
    />
  );
}

export default News;
