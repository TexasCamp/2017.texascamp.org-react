import React from 'react';

function Screen(props) {
  const classes = [
    'pages',
    `screen--${props.name}`,
  ].concat(props.classes);

  return (
    <section className={classes.join(' ')}>
      {props.children}
    </section>
  );
}

Screen.propTypes = {
  name: React.PropTypes.string.isRequired,
  classes: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Screen;
