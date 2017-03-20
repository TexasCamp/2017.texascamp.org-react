import React from 'react';
import MenuScroll from '../MenuScroll';
import MenuRouter from '../MenuRouter';

function Menu(props) {
  const { location } = props;
  const Component = location.pathname === '/' ? MenuScroll : MenuRouter;

  return (
    <Component />
  );
}

Menu.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Menu;
