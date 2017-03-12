import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="background-image">
        <img src={this.props.backgroundSrc} alt={this.props.backgroundAlt} />
      </div>
    );
  }
}

Background.propTypes = {
  backgroundSrc: React.PropTypes.string,
  backgroundAlt: React.PropTypes.string,
};

export default Background;
