import React from 'react';
import Skeleton from '../Skeleton';
import background from './sessions-bg.jpg';
import backgroundParallax from '../table.jpg';
import wanted from './wanted-poster.png';

function Sessions() {
  return (
    <Skeleton
      class="sessions"
      backgroundSrc={background}
      backgroundAlt="texas camp sessions background"
      backgroundSrcParallax={backgroundParallax}
      backgroundAltParallax="texas camp parallax background"
      title="STEP RIGHT UP"
      body="Blah blah blah needs words."
      rightElement={
        <img src={wanted} alt="submit a session" />
      }
    />
  );
}

export default Sessions;
