import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        <li>
          <NavLink to="/submit-session" className="menu__item">Submit A Session</NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default MenuRouter;
