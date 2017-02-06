import React from 'react';
import About from './About';
import Tickets from './Tickets';
import Sessions from './Sessions';
import Sponsors from './Sponsors';
import Venue from './Venue';
import News from './News';

function Frame() {
  return (
    <div id="frame">
      <About />
      <Tickets />
      <Sessions />
      <Sponsors />
      <Venue />
      <News />
    </div>
  );
}

export default Frame;
