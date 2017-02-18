import React from 'react';
import Skeleton from '../Skeleton';
import background from './about-bg.jpg';

function About() {
  return (
    <Skeleton
      backgroundSrc={background}
      backgroundAlt="texas camp about background"
      title="THREE DAYS IN A TWO STEP TOWN"
      body="Texas Camp is a Drupal Conference for the people, an annual celebration
      of open-source software in the Lone Star State.  Join us the June 2-4 for
      three days of talks, trainings, summits, sprints and socials with some of
      the brightest minds from all over the world."
    />
  );
}

export default About;
