import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import CampInfo from '../CampInfo';
import Menu from '../Menu';
import Social from '../Social';
import Footer from '../Footer';
import HomeScreen from '../Screen/components/Home';
import SubmitSessionScreen from '../Screen/components/SubmitSession';

function App() {
  return (
    <Router>
      <div id="app">
        <header className="header header--page">
          <CampInfo />
          <Menu />
        </header>

        <Route exact path="/" component={HomeScreen} />
        <Route path="/submit-session" component={SubmitSessionScreen} />

        <footer className="footer footer--page">
          <Social />
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
