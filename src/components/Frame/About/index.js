import React from 'react';
import { gql, graphql } from 'react-apollo';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import background from './about-bg.jpg';

function About({ data: { sectionByName } }) {
  return (
    <Page name="about" background={background} classes={['two-col']}>
      <Title level="h2" title={sectionByName ? sectionByName.title : ''} />
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

About.propTypes = {
  data: React.PropTypes.object,
};

export default graphql(gql`
  query
  root {
    sectionByName(name:"about") {
      title
    }
  }

`)(About);
