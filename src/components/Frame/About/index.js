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
        <p>
          Texas Camp is a homegrown event with the purpose of bringing the
          large Texas Drupal community together to get to know each other,
          share projects and ideas, and help newcomers find their way in the
          wide open frontier of the Drupal world.
        </p>
      </Content>
    </Page>
  );
}

export default About;
