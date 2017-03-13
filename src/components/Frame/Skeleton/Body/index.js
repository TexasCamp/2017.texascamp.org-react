import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="section--body">
        <div className="skeleton__body">{this.props.body}</div>
      </div>
    );
  }
}

Body.propTypes = {
  body: React.PropTypes.string,
};

export default Body;
