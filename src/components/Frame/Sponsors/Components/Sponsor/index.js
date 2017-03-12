import React from 'react';

function Sponsor(props) {
  return (
    <div className="sponsor">
      <h4 className="visuallyhidden">{props.name}</h4>
      <a href={props.link}>
        <img src={props.logo} alt={props.name} />
      </a>
    </div>
  );
}

Sponsor.propTypes = {
  name: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired,
};

export default Sponsor;
