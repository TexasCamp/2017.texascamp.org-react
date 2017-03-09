import React from 'react';
import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

class Menu extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', to, element);
    });

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
  handleSetActive(to) {
    console.log(to);
  }
  render() {
    return (
      <div>
        <Link
          className="test"
          activeClass="active"
          to="test1"
          spy
          smooth
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          Test 1
        </Link>

        <Element name="test1" className="element">
          test 1
        </Element>
      </div>
    );
  }
}

export default Menu;
