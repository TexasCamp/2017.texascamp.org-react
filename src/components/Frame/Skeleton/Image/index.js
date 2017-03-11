import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="section--image">
        {this.props.rightElement}
      </div>
    );
  }
}

Image.propTypes = {
  rightElement: React.PropTypes.string,
};

export default Image;
