import React from 'react';
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
        <Title level="h2" title="IN A PICKLE" />
        <Content classes={['content--aside']}>
          <img src={map} alt="submit a session" width="411" />
          <a href="https://www.google.com/maps/place/J.J.+Pickle+Research+Campus/@30.3876908,-97.7303761,17z/data=!3m1!4b1!4m5!3m4!1s0x8644cb88e2b39a67:0x1a1553b1ada3aeaf!8m2!3d30.3876908!4d-97.7281874" className="button--primary" target="_blank">GOOGLE MAP</a>
        </Content>
        <Content classes={['content--body']}>
          <p>
            We’re worked up about our venue this year!
            We’re headed to the
            {" "}
            <a href="https://goo.gl/maps/qoMNPrMX9CG2" target="_blank">UT JJ Pickle Research Campus</a>
            {" "}
            in North Austin.
            You’ll find great places to eat, drink and explore right quick.
          </p>
        </Content>
      </Page>
    );
  }
}

export default Venue;
