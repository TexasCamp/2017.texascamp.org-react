import React from 'react';
import Screen from '../../../Screen';
import Start from '../../../Frame/Start';
import About from '../../../Frame/About';
import Tickets from '../../../Frame/Tickets';
import Sessions from '../../../Frame/Sessions';
import Sponsors from '../../../Frame/Sponsors';
import Venue from '../../../Frame/Venue';
import News from '../../../Frame/News';
import Finish from '../../../Frame/Finish';
import SplashOfColor from '../../../SplashOfColor';
import splash1 from './splash1.jpg';
import splash2 from './splash2.jpg';
import splash3 from './splash3.jpg';
import splash4 from './splash4.jpg';
import splash5 from './splash5.jpg';
import splash6 from './splash6.jpg';
import splash7 from './splash7.jpg';

function HomeScreen() {
  return (
    <Screen name="home">
      <Start />
      <SplashOfColor background={splash1} />
      <About />
      <SplashOfColor background={splash2} />
      <Tickets />
      <SplashOfColor background={splash3} />
      <Sessions />
      <SplashOfColor background={splash4} />
      <Sponsors />
      <SplashOfColor background={splash5} />
      <Venue />
      <SplashOfColor background={splash6} />
      <News />
      <SplashOfColor background={splash7} />
      <Finish />
    </Screen>
  );
}

export default HomeScreen;
