import React from 'react';
import Skeleton from '../Skeleton';
import backgroundParallax from '../table.jpg';

function Venue() {
  return (
    <div id="venue">
      <Skeleton
        class="venue"
        backgroundSrc="/"
        backgroundAlt="texas camp venue background"
        backgroundSrcParallax={backgroundParallax}
        backgroundAltParallax="texas camp parallax background"
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
