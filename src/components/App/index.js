import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Frame from '../Frame';
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
        <Frame />
      </section>
      <section id="bottom">
        <Social />
        <Footer />
      </section>
    </div>
  );
}

export default App;
