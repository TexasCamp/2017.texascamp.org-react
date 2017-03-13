import React from 'react';
import drupalicon from './drupalicon-header.svg';

function CampInfo() {
  return (
    <section className="camp-info">
      <Drupalicon /> Texas Camp &middot; June 2-4, 2017, Austin, TX
    </section>
  );
}

function Drupalicon() {
  return (
    <a href="/">
      <img src={drupalicon} alt="drupal icon" />
    </a>
  );
}

export default CampInfo;
