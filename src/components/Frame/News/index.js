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
      <Title level="h2" title="You heard it here first" />
      <Content classes={['content--aside']}>
        <img src={ponyExpress} alt="sign up for news" width="376" />
        <NewsletterForm />
      </Content>
      <Content classes={['content--body']}>
        <a className="twitter-timeline" href="https://twitter.com/DrupalTexasCamp" data-height="500" data-dnt="true" data-link-color="#ebc387" data-chrome="transparent">
          Tweets by DrupalTexasCamp
        </a>
      </Content>
    </Page>
  );
}

export default News;
