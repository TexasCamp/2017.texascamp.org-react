import React from 'react';
import drupalicon from './drupalicon-header.svg';

function CampInfo() {
  return (
    <section className="camp-info">
      <Drupalicon />
      <p>Texas Camp &nbsp;&middot;&nbsp; June 2-4, 2017, Austin, TX</p>
    </section>
  );
}

function Drupalicon() {
  return (
    <a className="drupalicon" href="/">
      <img src={drupalicon} alt="drupal icon" />
    </a>
  );
}

export default CampInfo;
