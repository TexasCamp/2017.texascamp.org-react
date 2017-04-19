import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './tickets-bg.jpg';
import ticket from './ticket-regular.png';

function Tickets() {
  return (
    <Page name="tickets" background={background} classes={['two-col', 'light-bg']}>
      <Title level="h2" title="While the gettin's good" />
      <a href="https://texas-camp-2017.eventbrite.com" target="_blank">
        <Content classes={['content--aside']}>
          <img src={ticket} alt="register ticket" width="375" />
          <div className="button--primary">Register</div>
        </Content>
      </a>
      <Content classes={['content--body']}>
        <p>
          Y’all fixin’ to make your way to Austin? Get your tickets right
          quick—it’s almost here.
        </p>
        <p>
          Our trainings will make you smarter than a whip, and for only $25.
        </p>
        <ul>
          <li>Drupal 8 Certification Crash Course (Rackspace)</li>
          <li>
            What Am I getting Myself Into? A Drupal Crash Coures for Non-Developers
            (Promet Source)
          </li>
          <li>Automated workflows in Drupal 8 with GitHub, Composer and CircleCI (Pantheon)</li>
          <li>API First Drupal 8 with React.js and Waterwheel (Four Kitchens)</li>
        </ul>
      </Content>

    </Page>
  );
}

export default Tickets;
