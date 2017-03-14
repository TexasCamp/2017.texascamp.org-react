import React from 'react';
import CampInfo from '../CampInfo';
import Menu from '../Menu';
import Social from '../Social';
import Footer from '../Footer';
import HomeScreen from '../Screen/components/Home';

function App() {
  return (
    <div id="app">
      <header className="header header--page">
        <CampInfo />
        <Menu />
      </header>

      <HomeScreen />

      <footer className="footer footer--page">
        <Social />
        <Footer />
      </footer>
    </div>
  );
}

export default App;
