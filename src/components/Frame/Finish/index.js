import React from 'react';
import background from './finish-bg.jpg';

function Finish() {
  return (
    <div id="finish">
      <Background />
      <Text />
    </div>
  );
}

function Background() {
  return (
    <img src={background} alt="texas camp finish background" />
  );
}

function Text() {
  return (
    <div className="finish__quote"><blockquote className="finish__quote-text">
      <p>You may all go to hell,<br />and I will go to Texas.</p></blockquote>
      <p className="finish__quote-author">David Crockett</p></div>
  );
}

export default Finish;
