import React from 'react';
import { Formio } from 'react-formio';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';

function Sessions() {
  return (
    <Page name="submit-session" background={background} classes={['one-col', 'light-bg']}>
      <Title level="h2" title="Submit A Session" />
      <Content classes={['content--body']}>
        <Formio src="https://jqvzsivhnemmbtq.form.io/session" />
      </Content>
    </Page>
  );
}

export default Sessions;
