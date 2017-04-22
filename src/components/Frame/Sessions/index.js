import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';
import wanted from './wanted-poster.png';

function Sessions() {
  return (
    <Page name="sessions" background={background} classes={['two-col', 'light-bg']}>
      <Title level="h2" title="Step right up" />
      <Link to="/submit-session">
        <Content classes={['content--aside']}>
          <img src={wanted} alt="submit a session" width="411" />
          <div className="button--primary">Submit a session</div>
        </Content>
      </Link>
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
        <p>Session submissions will close Friday, April 28, 2017.</p>
        <p><Link to="/submit-session">Session Guidelines</Link></p>
      </Content>
    </Page>
  );
}

export default Sessions;
