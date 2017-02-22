import React from 'react';
import Start from './Start';
import About from './About';
import Tickets from './Tickets';
import Sessions from './Sessions';
import Sponsors from './Sponsors';
import Venue from './Venue';
import News from './News';
import Finish from './Finish';

function Frame() {
  return (
    <div id="frame" className="parallax">
      <Start />
      <About />
      <Tickets />
      <Sessions />
      <Sponsors />
      <Venue />
      <News />
      <Finish />
    </div>
  );
}

export default Frame;
