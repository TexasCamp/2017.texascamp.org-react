import React from 'react';
import { Link, scroll, scrollSpy } from 'react-scroll';

class Menu extends React.Component {
  componentDidMount() {
    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  render() {
    return (
      <nav id="menu">
        <ul>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              to="about"
              onSetActive={this.handleSetActive}
              isDynamic={Boolean(true)}
              spy
              smooth
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              isDynamic={Boolean(true)}
              to="tickets"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              isDynamic={Boolean(true)}
              to="sessions"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              Sessions
            </Link>
          </li>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              isDynamic={Boolean(true)}
              to="sponsors"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              isDynamic={Boolean(true)}
              to="venue"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              Venue
            </Link>
          </li>
          <li>
            <Link
              className="menu__item"
              containerId="middle"
              isDynamic={Boolean(true)}
              to="news"
              onSetActive={this.handleSetActive}
              spy
              smooth
              duration={500}
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Menu;
