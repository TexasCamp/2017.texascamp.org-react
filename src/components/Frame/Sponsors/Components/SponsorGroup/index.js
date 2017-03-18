import React from 'react';

function Sponsor(props) {
  return (
    <section className={`sponsor-group sponsors--${props.name.toLowerCase()}`}>
      <div className="sponsor-group__title-wrapper">
        <h3>{props.name}</h3>
      </div>
      <div className="sponsor-group__sponsors-wrapper">
        {props.sponsors}
      </div>
    </section>
  );
}

Sponsor.propTypes = {
  name: React.PropTypes.string.isRequired,
  sponsors: React.PropTypes.array,
};

export default Sponsor;
