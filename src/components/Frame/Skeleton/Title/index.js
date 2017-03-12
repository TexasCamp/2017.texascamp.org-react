import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="section--title">
        <h2 className="skeleton__title">{this.props.title}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  title: React.PropTypes.string,
};

export default Title;
