import React from 'react';

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
          <div className="section--title">
            <h2 className="skeleton__title">{this.props.title}</h2>
          </div>
          <div className="section--image">
            {this.props.rightElement}
          </div>
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
  backgroundSrc: React.PropTypes.string.isRequired,
  backgroundAlt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  rightElement: React.PropTypes.element,
};

export default Skeleton;
