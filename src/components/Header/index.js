import React from 'react';
import drupalicon from './drupalicon-header.svg';

function Header() {
  return (
    <div id="header">
      <Drupalicon /> Texas Camp | June 2-4, 2017, Austin, TX
    </div>
  );
}

function Drupalicon() {
  return (
    <a href="/">
      <img src={drupalicon} alt="drupal icon" />
    </a>
  );
}

export default Header;
