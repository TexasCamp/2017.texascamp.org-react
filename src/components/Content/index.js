import React from 'react';

function Content(props) {
  const classes = [
    'content',
  ].concat(props.classes);

  return (
    <div className={classes.join(' ')}>
      {props.children}
    </div>
  );
}

Content.propTypes = {
  classes: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Content;
