import React from 'react';

function Page(props) {
  const classes = [
    'page',
    `page--${props.name}`,
  ].concat(props.classes);

  let pageStyles = {};

  if (props.background) {
    pageStyles.backgroundImage = `url(${props.background})`;
  }

  return (
    <article id={props.name} className={classes.join(' ')} style={pageStyles}>
      {props.children}
    </article>
  );
}

Page.propTypes = {
  name: React.PropTypes.string.isRequired,
  background: React.PropTypes.string,
  classes: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Page;
