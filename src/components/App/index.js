import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import CampInfo from '../CampInfo';
import Menu from '../Menu';
import Social from '../Social';
import Credits from '../Credits';
import HomeScreen from '../Screen/components/Home';
import SubmitSessionScreen from '../Screen/components/SubmitSession';
import CoCScreen from '../Screen/components/CoC';

const EnhancedMenu = withRouter(Menu);

function App() {
  return (
    <Router>
      <div id="app">
        <header className="header header--page">
          <CampInfo />
          <EnhancedMenu />
        </header>

        <Route exact path="/" component={HomeScreen} />
        <Route path="/submit-session" component={SubmitSessionScreen} />
        <Route path="/code-of-conduct" component={CoCScreen} />

        <footer className="footer footer--page">
          <Social />
          <Credits />
        </footer>
      </div>
    </Router>
  );
}

export default App;
