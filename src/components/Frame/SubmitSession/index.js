import React from 'react';
// Required for Form.io <select> components
import 'react-widgets/lib/scss/react-widgets.scss';
// Required for Form.io WYSIWYG
import 'quill/dist/quill.snow.css';
import { Formio } from 'react-formio';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './sessions-bg.jpg';

function Sessions() {
  const classes = ['one-col', 'light-bg', 'fixed-bg'];

  return (
    <Page name="submit-session" background={background} classes={classes}>
      <Title level="h2" title="Submit A Session" />
      <Content classes={['content--body']}>
        <Formio src="https://jqvzsivhnemmbtq.form.io/session" />
      </Content>
    </Page>
  );
}

export default Sessions;
