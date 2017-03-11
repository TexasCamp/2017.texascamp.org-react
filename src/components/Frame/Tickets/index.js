import React from 'react';
import Button from '../../Button';
import Skeleton from '../Skeleton';
import background from './tickets-bg.jpg';
import ticket from './ticket.png';

function Tickets() {
  let TicketImage = (<div className="ticket-image">
    <img src={ticket} alt="register ticket" width="327.5px" />
    <Button link="https://texas-camp-2017.eventbrite.com" text="Register" />
  </div>);

  return (
    <Skeleton
      class="tickets"
      backgroundSrc={background}
      backgroundAlt="texas camp tickets background"
      title="While the gettin's good"
      body="Blah blah blah needs words."
      rightElement={TicketImage}
    />
  );
}

export default Tickets;
