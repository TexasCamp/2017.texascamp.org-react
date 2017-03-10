import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Start from '../Frame/Start';
import About from '../Frame//About';
import Tickets from '../Frame//Tickets';
import Sessions from '../Frame//Sessions';
import Sponsors from '../Frame//Sponsors';
import Venue from '../Frame//Venue';
import News from '../Frame//News';
import Finish from '../Frame//Finish';
import Social from '../Social';
import Footer from '../Footer';

function App() {
  return (
    <div id="app">
      <section id="top">
        <Header />
        <Menu />
      </section>
      <section id="middle">
        <Start />
        <About />
        <Tickets />
        <Sessions />
        <Sponsors />
        <Venue />
        <News />
        <Finish />
      </section>
      <section id="bottom">
        <Social />
        <Footer />
      </section>
    </div>
  );
}

export default App;
