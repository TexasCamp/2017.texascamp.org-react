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
