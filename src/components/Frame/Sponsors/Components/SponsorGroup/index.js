import React from 'react';
import Sponsor from '../Sponsor';

function SponsorGroup(props) {
  return (
    <section className={`sponsor-group sponsors--${props.name.toLowerCase()}`}>
      <h3 className="sponsor-group__title">
        {props.name}
      </h3>
      <div className="sponsor-group__sponsors">
        {props.sponsors.map(sponsor =>
          <Sponsor
            key={sponsor.name}
            name={sponsor.name}
            link={sponsor.link}
            logo={sponsor.logo}
          />
          )
        }
      </div>
    </section>
  );
}

SponsorGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  sponsors: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    logo: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default SponsorGroup;
