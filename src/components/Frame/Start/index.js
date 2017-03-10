import React from 'react';
import background from './start-bg.jpg';
import logo from './logo.svg';
import logoOutline from './logo-outline.svg';

function Start() {
  return (
    <div name="start" id="start" className="start">
      <Background />
      <Text />
      <Logo />
      <LogoOutline />
    </div>
  );
}

function Background() {
  return (
    <img src={background} alt="texas camp background" />
  );
}

function Text() {
  return (
    <h1>A DRUPAL FRONTIER.</h1>
  );
}

function Logo() {
  return (
    <div id="logo">
      <img src={logo} alt="texas camp logo" />
    </div>
  );
}

function LogoOutline() {
  return (
    <div id="logo-outline">
      <img src={logoOutline} alt="texas camp logo outline" />
    </div>
  );
}

export default Start;
