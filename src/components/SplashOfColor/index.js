import React from 'react';
import Page from '../Page';

function SplashOfColor(props) {
  const name = props.background.toLowerCase();

  return (
    <Page name={name} background={props.background} classes={['page--color']} />
  );
}

SplashOfColor.propTypes = {
  background: React.PropTypes.string.isRequired,
};

export default SplashOfColor;
