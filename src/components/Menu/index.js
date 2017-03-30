import React from 'react';
import MenuScroll from '../MenuScroll';
import MenuRouter from '../MenuRouter';
import hamburger from './hamburger.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHamburger: false,
    };
  }

  handleClick() {
    this.setState({ showHamburger: !this.state.showHamburger });
  }

  render() {
    const Component = this.props.location.pathname === '/' ? MenuScroll : MenuRouter;
    const classes = [
      'menu',
      'menu--main',
    ];

    if (this.state.showHamburger) {
      classes.push('menu--open');
    }

    return (
      <section className={classes.join(' ')}>
        <img
          className="menu--hamburger"
          onClick={() => this.handleClick()}
          src={hamburger}
          alt="toggle menu"
        />
        <Component />
      </section>
    );
  }
}

Menu.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Menu;
