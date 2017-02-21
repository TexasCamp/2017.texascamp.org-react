import React from 'react';
import background from './start-bg.jpg';
import logo from './logo.svg';
import logoOutline from './logo-outline.svg';

function Start() {
  return (
    <div id="start" >
      <div className="parallax__layer--child">

        <Background />
        <Text />
        <Logo />
        <LogoOutline />

      </div>
      <ParallaxBackground />
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

function ParallaxBackground() {
  return (
    <div className="parallax__layer--base">
      <img src={background} alt="texas camp background" />
    </div>
  );
}

export default Start;
