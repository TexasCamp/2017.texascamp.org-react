import React from 'react';
import Skeleton from '../Skeleton';

function Venue() {
  return (
    <div id="venue">
      <Skeleton
        class="venue"
        backgroundSrc="/"
        backgroundAlt="texas camp venue background"
        title="IN A PICKLE"
        body="How to get to TexasCamp 2017"
        rightElement={
          <div></div>
        }
      />
    </div>
  );
}

export default Venue;
