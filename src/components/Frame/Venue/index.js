import React from 'react';
import { Link } from 'react-scroll';
import Page from '../../Page';
import Title from '../../Title';
import Content from '../../Content';
import map from './map.jpg';

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class Venue extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <Page name="venue" classes={['two-col', 'light-bg']}>
        <Title level="h2" title="In a pickle" />
        <a href="https://www.google.com/maps/d/viewer?mid=1CQHcTgSgh1aHpXMjmLJjPZLqbnI" target="_blank">
          <Content classes={['content--aside']}>
            <img src={map} alt="submit a session" width="411" />
            <div className="button--primary">
              Explore Austin
            </div>
          </Content>
        </a>
        <Content classes={['content--body']}>
          <p>
            We’re worked up about our venue this year! We’re headed to the
            {" "}
            <a href="https://goo.gl/maps/ru92s6ftQFS2" target="_blank">Commons Learning Center</a>
            {" "}
            at the UT JJ Pickle Research Campus in North Austin. We reckon
            you’ll find great places to eat, drink and explore.&nbsp;
            <Link
              offset={-55}
              isDynamic={Boolean(true)}
              to="news"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              Sign up for our newsletter
            </Link>&nbsp;
            to get the best recommendations.
          </p>
          <p>
            <a href="https://fasten.com/">Fasten</a>,&nbsp;
            <a href="http://www.rideaustin.com/">Ride Austin</a>, and&nbsp;
            <a href="http://www.ridefare.com/">Fare</a> are the local Austin
            rideshare apps. Download the app when you land and use Google to
            find a new user discount code.
          </p>
        </Content>
      </Page>
    );
  }
}

export default Venue;
