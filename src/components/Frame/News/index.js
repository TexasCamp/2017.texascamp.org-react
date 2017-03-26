import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import NewsletterForm from '../../NewsletterForm';
import background from './news-bg.jpg';
import ponyExpress from './pony-express.png';

function News() {
  return (
    <Page name="news" background={background} classes={['two-col', 'light-bg']}>
      <Title level="h2" title="Submission deadline fast approaching" />
      <Content classes={['content--aside']}>
        <img src={ponyExpress} alt="sign up for news" width="376" />
        <NewsletterForm />
      </Content>
      <Content classes={['content--body']}>
        <p>Visit this page to keep up with Texas Camp-related announcements.</p>
      </Content>
    </Page>
  );
}

export default News;
