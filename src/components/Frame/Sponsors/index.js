import React from 'react';
import Skeleton from '../Skeleton';
import background from './sponsors-bg.jpg';
import backgroundParallax from '../snow.jpg';

function Sponsors() {
  return (
    <Skeleton
      class="sponsors"
      backgroundSrc={background}
      backgroundAlt="texas camp sessions background"
      backgroundSrcParallax={backgroundParallax}
      backgroundAltParallax="texas camp parallax background"
      title=""
      body=""
      rightElement={
        <div id="sponsors"></div>
      }
    />
  );
}

export default Sponsors;
