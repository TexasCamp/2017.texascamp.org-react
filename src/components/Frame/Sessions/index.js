import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';
import wanted from './wanted-poster.png';

function Sessions() {
  return (
    <Page name="sessions" background={background} classes={['two-col', 'light-bg']}>
      <Title level="h2" title="Step right up" />
      <Content classes={['content--aside']}>
        <img src={wanted} alt="submit a session" width="411" />
      </Content>
      <Content classes={['content--body']}>
        <p>
          We are looking for folks just like you to speak to our frontier of Drupal enthusiasts!
          Experienced speakers are always welcome, but camp is also a great place to start for
          first-time speakers. We are looking for diverse speakers to present on a range of topics.
          Whatever you are passionate about we are open to innovative ideas! It does not matter if
          it is a session you have presented many times or a brand new idea you are just bubbling to
          the surface. We want to hear from you!
        </p>
        <p>
          From the opening of session submission through the beginning of camp, we'll have
          communication to assist speakers (new and old) in creating engaging and informative
          sessions.
        </p>
        <p>Session submissions will close at midnight Monday, May 1, 2017.</p>
        <p>
          <a href="https://docs.google.com/spreadsheets/d/1qb1K8GaPbmaXYMn7mA_M0Cvy9-CqV1MYzf14gL-ZIEs/edit#gid=0">
            Submitted Sessions
          </a>
        </p>
      </Content>
    </Page>
  );
}

export default Sessions;
