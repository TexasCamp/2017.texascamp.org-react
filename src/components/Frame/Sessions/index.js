import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';
import wanted from './wanted-poster.png';

function Sessions() {
  const scheduleLink = 'https://joind.in/event/texas-camp/schedule/grid';
  return (
    <Page name="sessions" background={background} classes={['two-col', 'light-bg']}>
      <Title level="h2" title="A Mighty Fine Lineup" />
      <a href={scheduleLink}>
        <Content classes={['content--aside']}>
          <img src={wanted} alt="submit a session" width="411" />
          <a className="button--primary" href={scheduleLink}>View Schedule</a>
        </Content>
      </a>
      <Content classes={['content--body']}>
        <p>
          We’ve filled our&nbsp;
          <a href={scheduleLink}>
            schedule
          </a> with a stellar lineup of Drupal experts
          covering the latest and greatest in the industry. Our sessions range
          from beginner to advanced so there’s something for everyone.
        </p>
        <p>
          Texas Camp also offers Training, Sprints, and BOFs (Birds of a Feather
          peer discussions) for those looking for something a little different.
        </p>
      </Content>
    </Page>
  );
}

export default Sessions;
