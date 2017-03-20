import React from 'react';
import Button from '../../Button';
import Page from '../../Page';
import Content from '../../Content';
import SponsorGroup from './Components/SponsorGroup';
import background from './sponsors-bg.jpg';
import rackspaceLogo from './logos/rackspace.png';
import amazeeLogo from './logos/amazee-labs.png';
import fourkitchensLogo from './logos/four-kitchens.png';
import pantheonLogo from './logos/pantheon.png';
import kanopiLogo from './logos/kanopi-studios.png';
import acquiaLogo from './logos/todo.png';
import softescuLogo from './logos/softescu.png';
import texascreativeLogo from './logos/texas-creative.png';

function Sponsors() {
  const sponsors = [
    {
      name: 'Platinum',
      sponsors: [
        {
          name: 'Rackspace',
          link: 'https://www.rackspace.com',
          logo: rackspaceLogo,
        },
        {
          name: 'Amazee Labs',
          link: 'https://www.amazeelabs.com',
          logo: amazeeLogo,
        },
        {
          name: 'Four Kitchens',
          link: 'https://www.fourkitchens.com',
          logo: fourkitchensLogo,
        },
      ],
    },
    {
      name: 'Gold',
      sponsors: [
        {
          name: 'Pantheon',
          link: 'https://pantheon.io',
          logo: pantheonLogo,
        },
      ],
    },
    {
      name: 'Silver',
      sponsors: [
        {
          name: 'Kanopi Studios',
          link: 'https://www.kanopistudios.com',
          logo: kanopiLogo,
        },
      ],
    },
    {
      name: 'Bronze',
      sponsors: [
        {
          name: 'Acquia',
          link: 'https://www.acquia.com',
          logo: acquiaLogo,
        },
        {
          name: 'Softescu',
          link: 'https://softescu.com',
          logo: softescuLogo,
        },
        {
          name: 'Texas Creative',
          link: 'https://texascreative.com',
          logo: texascreativeLogo,
        },
      ],
    },
  ];

  return (
    <Page name="sponsors" background={background} classes={['two-col']}>
      <Content classes={['content--prospectus']}>
        <Button
          link="//2017.texascamp.org/sites/default/files/texas-camp-sponsor-prospectus.pdf"
          text="Download Prospectus"
        />
      </Content>
      <Content classes={['content--aside']}>
        {sponsors.map(sponsor =>
          <SponsorGroup key={sponsor.name} name={sponsor.name} sponsors={sponsor.sponsors} />
        )}
      </Content>
    </Page>
  );
}

export default Sponsors;
