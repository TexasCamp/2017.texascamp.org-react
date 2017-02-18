import React from 'react';

class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="skeleton">
        <img src={this.props.backgroundSrc} alt={this.props.backgroundAlt} />

        <div className="left">
          <h2>{this.props.title}</h2>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}
Skeleton.propTypes = {
  backgroundSrc: React.PropTypes.string.isRequired,
  backgroundAlt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};

export default Skeleton;
