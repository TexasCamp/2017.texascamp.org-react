import React from 'react';

function Page(props) {
  const classes = [
    'page',
    `page--${props.name}`,
  ].concat(props.classes);

  const useBgImg = classes.indexOf('light-bg') > -1;

  let pageStyles = {};

  if (props.background && !useBgImg) {
    pageStyles.backgroundImage = `url(${props.background})`;
  }

  return (
    <article id={props.name} className={classes.join(' ')} style={pageStyles}>
      {useBgImg &&
        <img src={props.background} className="content--background" role="presentation" />
      }
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
