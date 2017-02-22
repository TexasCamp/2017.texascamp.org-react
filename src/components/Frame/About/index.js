import React from 'react';
import Skeleton from '../Skeleton';
import background from './about-bg.jpg';
import backgroundParallax from '../table.jpg';

function About() {
  return (
    <Skeleton
      class="about"
      backgroundSrc={background}
      backgroundAlt="texas camp about background"
      backgroundSrcParallax={backgroundParallax}
      backgroundAltParallax="texas camp parallax background"
      title="THREE DAYS IN A TWO STEP TOWN"
      body="Texas Camp is a Drupal Conference for the people, an annual celebration
      of open-source software in the Lone Star State.  Join us the June 2-4 for
      three days of talks, trainings, summits, sprints and socials with some of
      the brightest minds from all over the world."
    />
  );
}

export default About;
