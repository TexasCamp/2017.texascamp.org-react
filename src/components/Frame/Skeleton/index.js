import React from 'react';

class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    const skeletonClass = `skeleton ${this.props.class}`;
    this.state = { class: skeletonClass };
  }

  render() {
    return (
      <div className={this.state.class}>
        <div className="background-image">
          <img src={this.props.backgroundSrc} alt={this.props.backgroundAlt} />
        </div>

        <div className="left">
          <h2 className="skeleton__title">{this.props.title}</h2>
          <p className="skeleton__body">{this.props.body}</p>
        </div>

        <div className="right">
          <div className="image-wrapper">
            {this.props.rightElement}
          </div>
        </div>
      </div>
    );
  }
}
Skeleton.propTypes = {
  class: React.PropTypes.string.isRequired,
  backgroundSrc: React.PropTypes.string.isRequired,
  backgroundAlt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  rightElement: React.PropTypes.element,
};

export default Skeleton;
