import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';

function Sessions() {
  return (
    <Page name="submit-session" background={background} classes={['light-bg']}>
      <Title level="h2" title="Submit A Session" />
      <Content classes={['content--body']}>
        <p>Put session form here!</p>
      </Content>
    </Page>
  );
}

export default Sessions;
