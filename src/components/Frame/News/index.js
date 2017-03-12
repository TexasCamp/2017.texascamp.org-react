import React from 'react';
import Skeleton from '../Skeleton';
import NewsletterForm from '../../NewsletterForm';
import background from './news-bg.jpg';
import ponyExpress from './pony-express.png';

function News() {
  let NewsletterImage = (<div className="image-wrapper">
    <img src={ponyExpress} alt="signup for news" />
    <NewsletterForm />
  </div>);

  return (
    <Skeleton
      class="news"
      backgroundSrc={background}
      backgroundAlt="texas camp news background"
      title="Submission deadline fast approaching"
      body="Submit a session"
      rightElement={NewsletterImage}
    />
  );
}

export default News;
