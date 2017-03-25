import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import fancyMapStyles from './fancyMapStyles.json';
import Page from '../../Page';
import Title from '../../Title';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const StyledMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 30.407760, lng: -97.798158 }}
    defaultOptions={{
      styles: fancyMapStyles,
      zoomControl: true,
      scrollwheel: false,
      draggable: true,
    }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class Venue extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      markers: [{
        position: {
          lat: 30.3876864,
          lng: -97.728287,
        },
        key: 'pickle',
        defaultAnimation: 2,
      }],
      map: [],
    };
  }

  render() {
    return (
      <Page name="venue">
        <section className="content--venue">
          <Title level="h2" title="In a pickle" />
          <p className="venue__text">We’re worked up about our venue this year!
            We’re headed to the <a href="https://goo.gl/maps/qoMNPrMX9CG2">UT
            JJ Pickle Research Campus</a> in North Austin.
            You’ll find great places to eat, drink and explore right quick.
          </p>
        </section>
        <section className="map--venue">
          <StyledMapExampleGoogleMap
            containerElement={
              <div id="google-map" />
            }
            mapElement={
              <div style={{ height: '100%' }} />
            }
            markers={this.state.markers}
          />
        </section>
      </Page>
    );
  }
}

export default Venue;
