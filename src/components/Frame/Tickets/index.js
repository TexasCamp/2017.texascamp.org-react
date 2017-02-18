import React from 'react';
import Skeleton from '../Skeleton';
import background from './tickets-bg.jpg';
import ticket from './ticket.png';

function Tickets() {
  return (
    <Skeleton
      class="tickets"
      backgroundSrc={background}
      backgroundAlt="texas camp tickets background"
      title="WHILE THE GETTIN'S GOOD"
      body="Blah blah blah needs words."
      rightElement={
        <img src={ticket} alt="register ticket" />
      }
    />
  );
}

export default Tickets;
