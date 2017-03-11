import React from 'react';
import Skeleton from '../Skeleton';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    doesntmatter={props}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
function Venue() {
  return (
    <div name="venue" id="venue" className="venue">
      <Skeleton
        class="venue"
        title="In a pickle"
        body="How to get to TexasCamp 2017"
        rightElement={
          <SimpleMapExampleGoogleMap
            containerElement={
              <div id="google-map" style={{ height: '100%' }} />
            }
            mapElement={
              <div style={{ height: '100%' }} />
            }
          />
        }
      />
    </div>
  );
}

export default Venue;
