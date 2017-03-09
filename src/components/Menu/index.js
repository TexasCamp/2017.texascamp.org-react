var React   = require('react');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


var Menu = React.createClass({
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  scrollTo: function() {
    scroll.scrollTo(100);
  },
  scrollMore: function() {
    scroll.scrollMore(100);
  },
  handleSetActive: function(to) {
    console.log(to);
  },
  render: function () {
    return (
        <div>
          <Link className="test" activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            Test 1
          </Link>

          <Element name="test1" className="element">
            test 1
          </Element>
        </div>
    );
  }
});

export default Menu;
