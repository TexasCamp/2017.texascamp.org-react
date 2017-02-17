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
    <h2>You may all go to hell,<br />and I will go to Texas.<br />- David Crockett</h2>
  );
}

export default Finish;
