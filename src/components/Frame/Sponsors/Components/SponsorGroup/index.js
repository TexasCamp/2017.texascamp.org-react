import React from 'react';

function Sponsor(props) {
  return (
    <section className={`sponsor-group sponsors--${props.name.toLowerCase()}`}>
      <h3>{props.name}</h3>
      {props.sponsors}
    </section>
  );
}

Sponsor.propTypes = {
  name: React.PropTypes.string.isRequired,
  sponsors: React.PropTypes.array,
};

export default Sponsor;
