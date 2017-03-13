import React from 'react';

function Page(props) {
  const classes = [
    'page',
    `page--${props.name}`,
  ].concat(props.classes);

  let pageStyles = {
    backgroundImage: `url(${props.background})`,
  };

  return (
    <article className={classes.join(' ')} style={pageStyles}>
      {props.children}
    </article>
  );
}

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  background: React.PropTypes.string.isRequired,
  classes: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Page;
