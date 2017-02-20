import React from 'react';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function Social() {
  return (
    <div id="social">
      <Twitter /> | <Facebook /> | <CodeOfConduct />
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
    <a href="/">
      <img src={facebook} alt="facebook" />
    </a>
  );
}

function CodeOfConduct() {
  return (
    <a href="/">
      Code of Conduct
    </a>
  );
}

export default Social;
