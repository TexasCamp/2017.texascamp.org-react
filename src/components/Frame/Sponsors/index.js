import React from 'react';
import Button from '../../Button';
import Page from '../../Page';
import Content from '../../Content';
import SponsorGroup from './Components/SponsorGroup';
import Sponsor from './Components/Sponsor';
import background from './sponsors-bg.jpg';
import rackspaceLogo from './logos/rackspace.png';
import amazeeLogo from './logos/amazee-labs.png';
import fourkitchensLogo from './logos/four-kitchens.png';
import pantheonLogo from './logos/pantheon.png';
import kanopiLogo from './logos/kanopi-studios.png';
import leveltenLogo from './logos/level-ten-interactive.png';
import acquiaLogo from './logos/todo.png';
import softescuLogo from './logos/softescu.png';
import texascreativeLogo from './logos/texas-creative.png';

function Sponsors() {
  let sponsors = [
    <SponsorGroup
      name="Platinum"
      sponsors={[
        <Sponsor key="Rackspace" name="Rackspace" link="https://www.rackspace.com" logo={rackspaceLogo} />,
        <Sponsor key="Amazee Labs" name="Amazee Labs" link="https://www.amazeelabs.com" logo={amazeeLogo} />,
        <Sponsor key="Four Kitchens" name="Four Kitchens" link="https://www.fourkitchens.com" logo={fourkitchensLogo} />,
      ]}
    />,
    <SponsorGroup
      name="Gold"
      sponsors={[
        <Sponsor key="Pantheon" name="Pantheon" link="https://pantheon.io" logo={pantheonLogo} />,
      ]}
    />,
    <SponsorGroup
      name="Silver"
      sponsors={[
        <Sponsor key="Kanopi Studios" name="Kanopi Studios" link="https://www.kanopistudios.com" logo={kanopiLogo} />,
        <Sponsor key="LevelTen Interactive" name="LevelTen Interactive" link="http://getlevelten.com" logo={leveltenLogo} />,
      ]}
    />,
    <SponsorGroup
      name="Bronze"
      sponsors={[
        <Sponsor key="Acquia" name="Acquia" link="https://www.acquia.com" logo={acquiaLogo} />,
        <Sponsor key="Softescu" name="Softescu" link="https://softescu.com" logo={softescuLogo} />,
        <Sponsor key="Texas Creative" name="Texas Creative" link="https://texascreative.com" logo={texascreativeLogo} />,
      ]}
    />,
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
        {sponsors}
      </Content>
    </Page>
  );
}

export default Sponsors;
