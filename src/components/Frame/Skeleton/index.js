import React from 'react';
import Title from './Title';
import Image from './Image';
import Body from './Body';
import Background from './Background';

class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    const skeletonClass = `skeleton ${this.props.class}`;
    this.state = { name: this.props.class, class: skeletonClass };
  }

  render() {
    let background = null;

    if (this.props.backgroundSrc) {
      background = (
        <Background
          backgroundSrc={this.props.backgroundSrc}
          backgroundAlt={this.props.backgroundAlt}
        />
      );
    }

    return (
      <div name={this.state.name} id={this.state.name} className={this.state.class}>
        {background}

        <div className="wrapper">
          <Title title={this.props.title} />
          <Image rightElement={this.props.rightElement} />
          <Body body={this.props.body} />
        </div>
      </div>
    );
  }
}
Skeleton.propTypes = {
  class: React.PropTypes.string.isRequired,
  backgroundSrc: React.PropTypes.string,
  backgroundAlt: React.PropTypes.string,
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  rightElement: React.PropTypes.element,
};

export default Skeleton;
