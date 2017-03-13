import React from 'react';
import CampInfo from '../CampInfo';
import Menu from '../Menu';
import Start from '../Frame/Start';
import About from '../Frame/About';
import Tickets from '../Frame/Tickets';
import Sessions from '../Frame/Sessions';
import Sponsors from '../Frame/Sponsors';
import Venue from '../Frame/Venue';
import News from '../Frame/News';
import Finish from '../Frame/Finish';
import Social from '../Social';
import Footer from '../Footer';

function App() {
  return (
    <div id="app">
      <header className="header header--page">
        <CampInfo />
        <Menu />
      </header>
      <section className="pages">
        <Start />
        <About />
        <Tickets />
        <Sessions />
        <Sponsors />
        <Venue />
        <News />
        <Finish />
      </section>
      <footer className="footer footer--page">
        <Social />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
