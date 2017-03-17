import React from 'react';
import { Link } from 'react-router-dom';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function Social() {
  return (
    <div id="social">
      <Twitter />
      <Facebook />
      <Link to="/code-of-conduct">Code of Conduct</Link>
    </div>
  );
}

function Twitter() {
  return (
    <a href="https://twitter.com/drupaltexascamp" target="_blank">
      <img src={twitter} alt="twitter" />
    </a>
  );
}

function Facebook() {
  return (
    <a href="https://www.facebook.com/DrupalCampTexas/" target="_blank">
      <img src={facebook} alt="facebook" />
    </a>
  );
}

export default Social;
