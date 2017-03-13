import React from 'react';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './about-bg.jpg';

function About() {
  return (
    <Page name="about" background={background} classes={['two-col']}>
      <Title level="h2" title="Three days in a two-step town" />
      <Content classes={['content--body']}>
        <p>Texas Camp is a Drupal Conference for the people, an annual celebration
        of open-source software in the Lone Star State. Join us the June 2-4 for
        three days of talks, trainings, summits, sprints and socials with some of
        the brightest minds from all over the world.</p>
      </Content>
    </Page>
  );
}

export default About;
