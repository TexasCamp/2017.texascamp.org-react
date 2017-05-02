import React from 'react';
import { Link } from 'react-router-dom';

function MenuRouter() {
  return (
    <nav className="menu menu--main">
      <ul>
        <li>
          <Link to="/" className="menu__item">Home</Link>
        </li>
        <li>
          <a href="https://texas-camp-2017.eventbrite.com/" className="menu__item">Buy Tickets</a>
        </li>
      </ul>
    </nav>
  );
}


export default MenuRouter;
