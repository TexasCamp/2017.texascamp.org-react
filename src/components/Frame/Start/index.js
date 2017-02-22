import React from 'react';
import background from './start-bg.jpg';
import logo from './logo.svg';
import logoOutline from './logo-outline.svg';
import backgroundParallax from '../snow.jpg';

function Start() {
  return (
    <div id="start" >
      <div className="start">

        <div className="parallax__group">
          <div className="parallax__layer--base">
            <Background />
            <Text />
            <Logo />
            <LogoOutline />
          </div>

          <div className="parallax__layer--back">
            <ParallaxBackground />
          </div>
        </div>

      </div>

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
    <img src={backgroundParallax} alt="texas camp parallax background" />
  );
}

export default Start;
