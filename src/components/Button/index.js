import React from 'react';

function Button(props) {
  return (
    <a href={props.link} className="button--primary">{props.text}</a>
  );
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};

export default Button;
