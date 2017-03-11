import React from 'react';
import Title from './Title';
import Image from './Image';

class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    const skeletonClass = `skeleton ${this.props.class}`;
    this.state = { name: this.props.class, class: skeletonClass };
  }

  render() {
    return (
      <div name={this.state.name} id={this.state.name} className={this.state.class}>
        <div className="background-image">
          <img src={this.props.backgroundSrc} alt={this.props.backgroundAlt} />
        </div>

        <div className="wrapper">
          <Title title={this.props.title} />
          <Image rightElement={this.props.rightElement} />
          <div className="section--body">
            <p className="skeleton__body">{this.props.body}</p>
          </div>
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
