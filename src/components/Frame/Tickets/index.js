import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './tickets-bg.jpg';
import ticket from './ticket.png';

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
      </Content>

    </Page>
  );
}

export default Tickets;
