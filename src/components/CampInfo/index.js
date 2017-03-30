import React from 'react';
import drupalicon from './drupalicon-header.svg';

function CampInfo() {
  return (
    <section className="camp-info">
      <Drupalicon />
      <span className="camp-name">Texas Camp</span>
      <span className="separator">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      <span className="camp-date">June 2-4, 2017, Austin, TX</span>
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
