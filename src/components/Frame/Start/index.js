import React from 'react';
import Page from '../../Page';
import background from './start-bg.jpg';
import logo from './logo.svg';
import logoOutline from './logo-outline.svg';

function Start() {
  return (
    <Page name="start" background={background}>
      <h1>A DRUPAL FRONTIER.</h1>
      <img src={logo} alt="Texas Camp Logo" className="logo logo--infill" />
      <img src={logoOutline} alt="Texas Camp Log Outline" className="logo logo--outline" />
    </Page>
  );
}

export default Start;
