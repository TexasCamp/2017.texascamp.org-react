import React from 'react';
import Page from '../../Page';
import background from './finish-bg.jpg';

function Finish() {
  return (
    <Page name="finish" background={background}>
      <div className="finish__quote">
        <blockquote className="finish__quote-text">
          <p>You may all go to hell,<br />and I will go to Texas.</p>
        </blockquote>
        <p className="finish__quote-author">David Crockett</p>
      </div>
    </Page>
  );
}

export default Finish;
