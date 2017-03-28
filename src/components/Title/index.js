import React from 'react';

function Title(props) {
  return (<props.level className="title">{props.title}</props.level>);
}

Title.propTypes = {
  level: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Title;
