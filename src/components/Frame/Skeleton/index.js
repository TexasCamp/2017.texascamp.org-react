import React from 'react';
import Title from './Title';
import Image from './Image';
import Body from './Body';
import Background from './Background';

class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
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
      <div name={this.props.class} id={this.props.class} className={`skeleton ${this.props.class}`}>
        {background}

        <div className={`wrapper wrapper__left ${this.props.class}__left`}>
          <Title title={this.props.title} />
          <Body body={this.props.body} />
        </div>
        <div className={`wrapper wrapper__right ${this.props.class}__right`}>
          <Image rightElement={this.props.rightElement} />
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
