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
          You have an idea?
          We want to hear it.
          Submit your sessions here!
          Session submissions close April 31st at midnight.
        </p>
      </Content>
    </Page>
  );
}

export default Sessions;
