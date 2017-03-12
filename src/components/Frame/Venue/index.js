import React from 'react';
import Skeleton from '../Skeleton';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import fancyMapStyles from './fancyMapStyles.json';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const StyledMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 30.407760, lng: -97.798158 }}
    defaultOptions={{
      styles: fancyMapStyles,
      scrollwheel: false,
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
      <div name="venue" id="venue" className="venue">
        <Skeleton
          class="venue"
          title="In a pickle"
          body="How to get to TexasCamp 2017"
          rightElement={
            <StyledMapExampleGoogleMap
              containerElement={
                <div id="google-map" />
              }
              mapElement={
                <div style={{ height: '100%' }} />
              }
              markers={this.state.markers}
            />
          }
        />
      </div>
    );
  }
}

export default Venue;
