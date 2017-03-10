import React from 'react';
import Skeleton from '../Skeleton';

function Venue() {
  return (
    <div name="venue" id="venue" className="venue">
      <Skeleton
        class="venue"
        backgroundSrc="/"
        backgroundAlt="texas camp venue background"
        title="In a pickle"
        body="How to get to TexasCamp 2017"
        rightElement={
          <div></div>
        }
      />
    </div>
  );
}

export default Venue;
