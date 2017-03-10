import React from 'react';
import { Link, Events, scroll, scrollSpy } from 'react-scroll';

class Menu extends React.Component {
  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
  handleSetActive() {
  }
  render() {
    return (
      <div id="menu">
        <Link
          className="venueLink"
          to="venue"
          spy
          smooth
          duration={500}
        >
          Test 1
        </Link>
      </div>
    );
  }
}

export default Menu;
