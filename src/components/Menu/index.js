import React from 'react';
import MenuScroll from '../MenuScroll';
import MenuRouter from '../MenuRouter';
import hamburger from './hamburger.png';

function Menu(props) {
  const { location } = props;
  const Component = location.pathname === '/' ? MenuScroll : MenuRouter;

  return (
    <section className="menu menu--main">
      <img className="menu--hamburger" src={hamburger} alt="toggle main menu" />
      <Component />
    </section>
  );
}

Menu.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Menu;
