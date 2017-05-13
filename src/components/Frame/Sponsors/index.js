import React from 'react';
import Button from '../../Button';
import Page from '../../Page';
import Content from '../../Content';
import SponsorGroup from './Components/SponsorGroup';
import PDF from './texas-camp-sponsor-prospectus.pdf';
import background from './sponsors-bg.jpg';
import trailer from './thank-you-trailer.png';
import rackspaceLogo from './logos/rackspace.png';
import amazeeLogo from './logos/amazee-labs.png';
import fourkitchensLogo from './logos/four-kitchens.png';
import pantheonLogo from './logos/pantheon.png';
import kanopiLogo from './logos/kanopi-studios.png';
import levelten from './logos/level-ten-interactive.png';
import acquiaLogo from './logos/acquia.png';
import amazeeio from './logos/amazeeio.svg';
import softescuLogo from './logos/softescu.png';
import texascreativeLogo from './logos/texas-creative.png';
import prometsourceLogo from './logos/promet-source.png';
import zilleemLogo from './logos/zilleem_logo_white.jpg';
import bluesparkLogo from './logos/bluesparkLogo.png';

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
        {
          name: 'prometsource',
          link: 'https://www.prometsource.com',
          logo: prometsourceLogo,
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
        {
          name: 'LevelTen Interactive',
          link: 'http://getlevelten.com',
          logo: levelten,
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
          name: 'Amazee.io',
          link: 'https://www.amazee.io',
          logo: amazeeio,
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
        {
          name: 'Zilleem',
          link: 'http://zilleem.com',
          logo: zilleemLogo,
        },
        {
          name: 'Bluespark',
          link: 'https://www.bluespark.com',
          logo: bluesparkLogo,
        },
      ],
    },
  ];

  return (
    <Page name="sponsors" background={background} classes={['two-col']}>
      <Content classes={['content--body']}>
        <div className="trailer-wrapper">
          <img src={trailer} alt="thank you trailer" className="content--trailer" />
          <div className={['content--prospectus']}>
            <Button
              link={PDF}
              text="Download Prospectus"
            />
          </div>
        </div>
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
